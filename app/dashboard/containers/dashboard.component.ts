import {Component, Input} from "@angular/core";
import {People} from "../../models/interfaces";

@Component({
    selector: 'dashboard-component',
    styleUrls: ['dashboard.component.scss'],
    template: `
        <div class="dashboardComponent">
            <h1>{{title}}</h1>
            
            <counter-component
                [total]="(passengers?.length)"
                [valid]="(checkedInAmount())" >
                
            </counter-component>

            <div class="searchBox">
                <input
                        #nameInput
                        type = "text"
                        placeholder = "search for name"
                        [value] = "(nameInputValue)"
                        (input) = "handleInputChange('nameInputValue', nameInput.value)"/>

                <input
                        #idInput
                        type = "text"
                        placeholder = "search by id"
                        [(ngModel)] ="idInputValue"/>

                <button
                        (click) = "(handleClick())" >
                    Search!
                </button>
            </div>
            <div class="searchingBox">
                <div *ngIf="(idInputValue?.length > 0) || (nameInputValue?.length) > 0">
                    Searching...
                </div>
            </div>

            <div class="listHeader">
                <div>Name</div>
                <div>Surname</div>
                <div>birthday</div>
                <div>e-mail</div>
                <div>children</div>
            </div>
            <div class="tableContainer">
                <tableItem-component
                        *ngFor="let passenger of passengers"
                        [detail]="passenger">

                </tableItem-component>
            </div>
        </div>
    `
})

export class DashboardComponent{
    @Input()
    passengers: People[];

    constructor() {
    };

    checkedInAmount = () => {
        if(!this.passengers) {
            return 0
        }

        return this.passengers.filter((passenger: People)=> passenger.checkedIn == true).length;
    }

}