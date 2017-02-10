import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {Response} from "@angular/http";
import {isUndefined} from "util";

@Component({
    selector: 'app-user-signin',
    templateUrl: './user-signin.component.html',
    styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {
    model: any;
    private _userName:string;
    private _password:string;

    constructor(
        private router: Router,
        private userService:UserService
    ) {}

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    ngOnInit() {
    }

    signin() {
        let resp:any;
        this.userService.login(this._userName,this._password).subscribe(response => {
            resp = response;

            if ( resp!= null){

                window.localStorage.setItem("userRole",resp.user.role);
                window.localStorage.setItem("token",resp.token);
                this.router.navigateByUrl('/events');
            }else {

                this.router.navigate(['/signin'])
            }
        });


    }
}
