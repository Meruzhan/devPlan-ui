import {Component} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-user-signup',
    templateUrl: './user-signup.component.html',
    styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
    private model = new User();
    private error: Boolean = false;

    constructor(private userService: UserService, private router: Router) {
    }

    get debugInfo() {
        return JSON.stringify(this.model);
    }

    onSubmit() {
        this.model.role = "ROLE_USER";
        console.log(module);
        this.userService.create(this.model).subscribe(
            data => {
                this.model.id =data;
                this.router.navigate(['/events']);
            },
            error => {
                this.error = true;
            })
    }
}
