/**
 * Created by aram.hovhannisyan on 12/7/2016.
 */
export class Event {
    private _id:number;
    private _title:String;
    private _startDate:number;
    private _endDate:number;
    private

    get id():number {
        return this._id;
    }

    set id(value:number) {
        this._id = value;
    }

    get title():String {
        return this._title;
    }

    set title(value:String) {
        this._title = value;
    }

    get startDate():number {
        return this._startDate;
    }

    set startDate(value:number) {
        this._startDate = value;
    }

    get endDate():number {
        return this._endDate;
    }

    set endDate(value:number) {
        this._endDate = value;
    }
}
