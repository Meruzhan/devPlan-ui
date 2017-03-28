import {Injectable} from '@angular/core';
import {Http,  RequestOptions, URLSearchParams, Response} from "@angular/http";
import {SERVER_URL} from "../server.config";
import {Observable} from "rxjs/Rx";
import {Event} from "../models/event";

@Injectable()
export class EventService {
    private baseUrl = SERVER_URL + '/events';

    constructor(private http: Http) {
    }

    loadAll(page: number, size: number) {
        // return this.http.get(this.baseUrl).map((response:Response) => response.json());
        let param = new URLSearchParams();
        // param.set("page","0");
        param.set("page", page.toString());
        param.set("size",size.toString());
        // param.set("size", "1");
        let p = new RequestOptions();

        return this.http.get(this.baseUrl, {search: param})
            .map(
                (response: Response) => {
                    return response.json();
                },
                (error: Response) => "error"
            )
            .catch(
                (response: Response) => ""
            );

    }

    loadById(id: number) {
        return this.http.get(this.baseUrl + "/" + id).map((response: Response) => response.json());
    }

    create(event: Event) {
        return this.http.post(this.baseUrl, event).map((response: Response) => response.json());
    }

    loadSubscribers(eventId: number) {
        let url = `${this.baseUrl}/subscribers/count?eventId=${eventId}`;
        return this.http.get(url).map((response: Response) => response.json())
            .catch((respons: Response) => "");
    }

    loadEventByUserId(eventid: number, userId: number) {
        let url = `${this.baseUrl}/subscribers?eventId=${eventid}&userId=${userId}`;
        return this.http.get(url).map((response: Response) => {
            return response.json()
        })
    }

    saveSubscriber(eventId: number, subscriberId: number) {
        let url = `${this.baseUrl}/subscribers`;
        return this.http.post(url, {eventId: eventId, subscriberId: subscriberId}).map((response: Response) => {
            return response.json();
        })
    }

    deleteSubscriber(eventId: number, subscriberId: number) {
        let url = `${this.baseUrl}/subscribers`;
        let body: RequestOptions = new RequestOptions();
        body.body = {eventId: eventId, subscriberId: subscriberId};
        return this.http.delete(url, body).map((response: Response) => {
            return response.json();
        })
    }

    searchEvent(page:number,size:number, search:any){
        let url = `${this.baseUrl}/search`;
        let param = new URLSearchParams();
        param.set("page",page.toString());
        param.set("size",size.toString());
        param.set("search",search);
       return this.http.get(url,{search: param}).map((response:Response)=>{
       return response.json();
       })
    }
}
