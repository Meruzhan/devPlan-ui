import {Injectable} from '@angular/core';
import {SERVER_URL} from "../server.config";
import {Http, Response, Headers} from "@angular/http";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Injectable()
export class UserService {
    private baseUrl = SERVER_URL + '/users';
    private headers = new Headers({'Content-Type':'application/json'});


    constructor(private http:Http) {
    }

    login(userName:any,password:any){
        const url = SERVER_URL +"/login";
        return this.http.post(url,{userName:userName,password:password}).map((response:Response) =>
            response.json(),
            (error:Response)=> "error"
        ).catch((respons:Response)=> "")
    }

    create(user:User) {
        return this.http.post(this.baseUrl, user).map((response:Response) => response.json());
    }
}
