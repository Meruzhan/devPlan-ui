import {Component, OnInit} from '@angular/core';
import {EventService} from "../../services/event.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-event-form',
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
    model: any = {};
    error: boolean = false;

    constructor(
        private eventService: EventService,
        private router: Router
    ) {}

    create() {
        this.model.author_id = localStorage.getItem("id");
        this.eventService.create(this.model).subscribe(
            data => {
                this.router.navigateByUrl('/events');
            },
            error => {
                this.error = true;
            }
        )
    }
}
