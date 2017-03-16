import {Component, OnInit, Input} from '@angular/core';
import {EventService} from "../../services/event.service";

@Component({
  selector: 'subscriber',
  templateUrl: 'subscriber.component.html',
  styleUrls: ['subscriber.component.css']
})
export class SubscriberComponent implements OnInit {

    private _subscriberCount:string;
    private _isSubscribered:boolean;
    private _eventId:number;

  constructor(private eventService:EventService) { }

  ngOnInit() {
  }


    get isSubscribered(): boolean {
        return this._isSubscribered;
    }

    set isSubscribered(value: boolean) {
        this._isSubscribered = value;
    }

    get subscriberCount(): string {
        return this._subscriberCount;
    }
    @Input()
    set subscriberCount(value: string) {
        this._subscriberCount = value;
    }

    @Input("countSubscribers")
    set loadCount(value:number){
      this._eventId = value;
      this.loadSubscribersCount(value);
      this.isSubscriber(value,+localStorage.getItem("id"));
    }

    loadSubscribersCount(eventId:number){
      this.eventService.loadSubscribers(eventId).subscribe(resp =>{
          this._subscriberCount = resp;
      })
  }

  isSubscriber(eventId:number,userId:number){
      this.eventService.loadEventByUserId(eventId,userId).subscribe(resp =>{
          return this._isSubscribered = resp;
      })
  }

  isLogin(){
      return localStorage.getItem("token");
  }

  unSubscribe( ){
      this.eventService.deleteSubscriber(this._eventId,+localStorage.getItem("id")).subscribe(resp=>{
          this._isSubscribered = true;
          this.loadSubscribersCount(this._eventId);
      })
  }

  subscriber(){
      this.eventService.saveSubscriber(this._eventId,+localStorage.getItem("id")).subscribe(resp=>{
          this._isSubscribered = false;
          this.loadSubscribersCount(this._eventId);
      })

  }

}
