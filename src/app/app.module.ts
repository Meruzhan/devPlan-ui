import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AlertModule} from 'ng2-bootstrap/ng2-bootstrap';

import {AppComponent} from './app.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {UserSigninComponent} from './components/user-signin/user-signin.component';
import {HomeComponent} from './components/home/home.component';
import {routing} from './app.routing';
import {UserSignupComponent} from './components/user-signup/user-signup.component';
import {EventsListComponent} from './components/events-list/events-list.component';
import {EventService} from "./services/event.service";
import {EventFormComponent} from './components/event-form/event-form.component';
import {EventDetailsComponent} from './components/event-details/event-details.component';
import {UserService} from "./services/user.service";
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SubscriberComponent } from './components/subscriber/subscriber.component';
import { PageComponent } from './components/page/page.component';
import {CalendarModule} from "primeng/components/calendar/calendar";

@NgModule({
    declarations: [
        AppComponent,
        UserInfoComponent,
        UserSigninComponent,
        HomeComponent,
        UserSignupComponent,
        EventsListComponent,
        EventFormComponent,
        EventDetailsComponent,
        MenuBarComponent,
        SubscriberComponent,
        PageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        AlertModule,
        CalendarModule

    ],
    providers: [
        EventService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
