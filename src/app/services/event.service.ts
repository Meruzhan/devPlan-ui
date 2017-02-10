import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {SERVER_URL} from "../server.config";
import {Observable} from "rxjs/Rx";

@Injectable()
export class EventService {
    private baseUrl = SERVER_URL + '/events';

    constructor(private http:Http) {
    } 

    loadAll() {
        // return this.http.get(this.baseUrl).map((response:Response) => response.json());
        return Observable.interval(1000)
            .switchMap(() => this.http.get(this.baseUrl)
                .map(
                    (response:Response) => response.json(),
                    (error:Response) => "error"
                )
                .catch(
                    (response:Response) => ""
                )
            );
    }

    loadById(id:number) {
        return this.http.get(this.baseUrl + "/" + id).map((response:Response) => response.json());
    }

    create(event:Event) {
        return this.http.post(this.baseUrl, event).map((response:Response) => response.json());
    }
}
