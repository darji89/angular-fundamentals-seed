import {Component, Input} from "@angular/core";
import {People} from "../../../models/interfaces";

@Component({
    selector: 'tableItem-component',
    styleUrls: ['tableItem.component.scss'],
    template: `
        <div class = "listItem">
            <div class="checked"[ngClass]="{checkedIn: detail.checkedIn}"></div>
            <div>{{detail.firstName}}</div>
            <div>{{detail.lastName}}</div>
            <div>{{detail.dateOfBirth| date:'dd MMM y'}}</div>
            <div>{{detail.email}}</div>
            <div>
                <span *ngFor="let child of detail.children">
                    {{child.firstName}}, 
                </span>
            </div>
        </div>
    `
})

export class TableItemComponent{
    @Input()
    detail: People;

    constructor() {}


}
