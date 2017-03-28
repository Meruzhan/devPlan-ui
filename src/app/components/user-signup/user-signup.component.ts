import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-user-signup',
    templateUrl: './user-signup.component.html',
    styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

    private model = new User();
    private error: Boolean = false;
    private _valid: string;


    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit(): void {
    }

    get debugInfo() {
        return JSON.stringify(this.model);
    }


    get valid(): string {
        return this._valid;
    }

    set valid(value: string) {
        this._valid = value;
    }

    onSubmit() {
        this.model.role = "ROLE_USER";
        console.log(module);
        this.userService.create(this.model).subscribe(
            data => {

                if (data != null && data != 400) {
                    this.model.id = data;
                    this.router.navigate(['/events']);
                }
                this._valid = "error";

            })
    }
}
