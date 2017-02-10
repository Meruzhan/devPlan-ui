import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {EventService} from "../../services/event.service";
import {Event} from "../../models/event";

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event: Event;

    constructor(
        private router:Router,
        private route:ActivatedRoute,
        private eventService:EventService
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.eventService.loadById(params['id']).subscribe(event => {
                this.event = event;
            });
        });
    }

}
