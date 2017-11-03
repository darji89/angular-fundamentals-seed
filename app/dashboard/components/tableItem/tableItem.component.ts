import {Component, Input, Output, EventEmitter} from "@angular/core";
import {People} from "../../../models/interfaces";
import {keyValDiff} from "@angular/core/src/change_detection/change_detection";

@Component({
    selector: 'tableItem-component',
    styleUrls: ['tableItem.component.scss'],
    template: `
        <div class = "listItem" *ngIf="(!editMode)">
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
            <div style="flex: 0 0 130px;">
               <button (click)="toggleEdit()">
                   EDIT
               </button>
            </div>
        </div>

        <div class = "listItem" *ngIf="(editMode)">
            <div class="checked"[ngClass]="{checkedIn: detail.checkedIn}"></div>
            <div>
                <input
                    [value] = "(detail.firstName)" />
            </div>
            <div>
                <input
                    [value] = "(detail.lastName)" />
            </div>
            <div>
                <input
                    [value] = "(detail.dateOfBirth| date:'dd MMM y')" />
            </div>
            <div>
                <input
                    [value] = "(detail.email)" />
            </div>
            <div>
                <span *ngFor="let child of detail.children">
                    {{child.firstName}}, 
                </span>
            </div>
            <div style="flex: 0 0 130px;">
                <button (click)="toggleEdit()">
                    Done
                </button>
                <button (click)="deleteItem()">
                    Delete
                </button>
            </div>
        </div>
    `
})

export class TableItemComponent{
    @Input()
        detail: People;

    @Output()
    onRemoveFromList: EventEmitter<any>;

    editMode: boolean;

    constructor() {
        this.editMode = false;
        this.onRemoveFromList = new EventEmitter();
    }

    toggleEdit = () => {
        this.editMode = !this.editMode;
    }

    deleteItem = () => {
        this.onRemoveFromList.emit(this.detail.id);
    }
}
