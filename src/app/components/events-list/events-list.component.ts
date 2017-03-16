import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {EventService} from "../../services/event.service";
import {Event} from "../../models/event"

@Component({
    selector: 'app-events',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
    events:Event[];
    private events$;
    private role;

    constructor(
        private eventService:EventService,
        private router:Router
    ) {}

    ngOnInit() {
        this.events$ = this.eventService.loadAll();
        this.events$.subscribe(
            events => this.events = events
        );
        this.role = window.localStorage.getItem("role");
    }


    isRole(): boolean{
        return this.role=="ROLE_ADMIN" || this.role=="ROLE_AUTHOR";
    }

    routerOnDeactivate() {
        this.events$.unsubscribe();
    }
}
