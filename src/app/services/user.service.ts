import {Injectable} from '@angular/core';
import {SERVER_URL} from "../server.config";
import {Http, Response, Headers} from "@angular/http";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Injectable()
export class UserService {
    private baseUrl = SERVER_URL + '/users';
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http) {
    }

    login(userName: any, password: any): Observable<any> {
        const url = SERVER_URL + "/login";
        return this.http.post(url, {userName: userName, password: password})
            .map((response: Response) => response.json())
            .catch(this.handleError)
    }

    private handleError(error: any) {
        return Observable.of(error.status);
    }

    create(user: User): Observable<any> {
        return this.http.post(this.baseUrl, user)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }


}
