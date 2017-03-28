import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {EventService} from "../../services/event.service";
import {Event} from "../../models/event"
import {DEFAULT_CONFIG} from "tslint/lib/configuration";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-events',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
    events: Event[];
    private events$;
    private role;
    private page: any;
    private  readonly DEFAULT_PAGE_SIZE:number = 10;
    private term =new FormControl;

    constructor(private eventService: EventService,
                private router: Router) {
        // this.events = this.term.valueChanges
        //     .debounceTime(400)
        //     .distinctUntilChanged()
        //     .switchMap(term => this.eventService.search(term));
    }

    ngOnInit() {
        this.events$ = this.eventService.loadAll(0, this.DEFAULT_PAGE_SIZE);
        this.events$.subscribe(page => {
                this.page = page;
                this.events = page.content;
            }
        );
        this.role = window.localStorage.getItem("role");
    }


    isRole(): boolean {
        return this.role == "ROLE_ADMIN" || this.role == "ROLE_AUTHOR";
    }

    routerOnDeactivate() {
        this.events$.unsubscribe();
    }

    searchEvent(search){
        // this.events = this.term.valueChanges
        //     .debounceTime(400)
        //     .distinctUntilChanged()
        //     .switchMap(term => this.eventService.searchEvent(this.page,this.DEFAULT_PAGE_SIZE,term));
        this.eventService.searchEvent(0,this.DEFAULT_PAGE_SIZE,search).debounceTime(400)
            .distinctUntilChanged().subscribe(searchResult =>{
            this.page =searchResult;
            this.events  = searchResult.content});

    }

    getEvent(page: number) {
        this.events$ = this.eventService.loadAll(page, this.DEFAULT_PAGE_SIZE);
        this.events$.subscribe(page => {
            this.page = page;
            this.events = page.content;
        });
    }
}
