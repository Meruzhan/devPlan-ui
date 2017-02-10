/**
 * Created by aram.hovhannisyan on 12/6/2016.
 */
import {Routes, RouterModule} from '@angular/router'

import {UserSigninComponent} from './components/user-signin/user-signin.component';
import {HomeComponent} from './components/home/home.component';
import {UserSignupComponent} from "./components/user-signup/user-signup.component";
import {EventsListComponent} from "./components/events-list/events-list.component";
import {EventFormComponent} from "./components/event-form/event-form.component";
import {EventDetailsComponent} from "./components/event-details/event-details.component";

const appRouting:Routes = [
    {path: '', component: HomeComponent},
    {path: 'signin', component: UserSigninComponent},
    {path: 'signup', component: UserSignupComponent},
    {path: 'events', component: EventsListComponent},
    {path: 'events/add', component: EventFormComponent},
    {path: 'events/:id', component: EventDetailsComponent},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRouting);
