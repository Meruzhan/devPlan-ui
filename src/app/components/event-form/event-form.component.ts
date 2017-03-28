import {Component, OnInit, ElementRef} from '@angular/core';
import {EventService} from "../../services/event.service";
import {Router} from "@angular/router";
import {Event} from "../../models/event";


@Component({
    selector: 'app-event-form',
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
    model: Event = new Event;
    value: Date = new Date;
    error: boolean = false;
    valid: string = "";

    constructor(private eventService: EventService,
                private router: Router) {
    }

    create() {
        this.model.authorId = +localStorage.getItem("id");
        if (this.isValid(this.model)) {
            this.eventService.create(this.model).subscribe(
                data => {
                    this.router.navigate(['/events']);
                },
                error => {
                    this.error = true;
                }
            )
        } else {
            this.valid = "error";
        }

    }

    private isValid(model: Event): boolean {
        if (model.startDate.getTime() > model.endDate.getTime()) {
            return false;
        }
        if (model.startDate.getTime() < (new Date()).getTime()) {
            return false;
        }
        if (!model.title) {
            return false;
        }
        if (model.authorId < 1) {
            return false;
        }

        return true;

    }

}
