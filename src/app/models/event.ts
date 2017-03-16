/**
 * Created by aram.hovhannisyan on 12/7/2016.
 */
export class Event {

    private _id:number;
    private _title:String;
    private _startDate:Date;
    private _endDate:Date;
    private _description:string;
    private _authorId:number;

    get authorId(): number {
        return this._authorId;
    }

    set authorId(value: number) {
        this._authorId = value;
    }

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

    get startDate():Date {
        return this._startDate;
    }

    set startDate(value:Date) {
        this._startDate = value;
    }

    get endDate():Date {
        return this._endDate;
    }

    set endDate(value:Date) {
        this._endDate = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}
