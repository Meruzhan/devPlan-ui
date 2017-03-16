import {Component, OnInit, Renderer, ElementRef} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {Response} from "@angular/http";
import {isUndefined} from "util";
import {element} from "protractor";

@Component({
    selector: 'app-user-signin',
    templateUrl: './user-signin.component.html',
    styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {
    model: any;
    private _userName: string;
    private _password: string;
    private _valid: string;

    get valid(): string {
        return this._valid;
    }

    set valid(value: string) {
        this._valid = value;
    }

    constructor(private router: Router,
                private userService: UserService,
                private render: Renderer) {
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get password(): string {
        return this._password;
    }


    ngOnInit() {
    }

    signin() {
        let resp: any;

        let v = this.userService.login(this._userName, this._password);
        this.userService.login(this._userName, this._password).subscribe(response => {
            resp = response;
            if (resp != null && resp != 400) {
                window.localStorage.setItem("role", resp.user.role);
                window.localStorage.setItem("token", resp.token);
                window.localStorage.setItem("id", resp.user.id);
                this.router.navigateByUrl('/events');
            } else {
                this._valid = "5px solid #a94442";
            }
        });

    }
}
