import {Component, Input, OnInit} from "@angular/core";
import {People} from "../../models/interfaces";

@Component({
    selector: 'dashboard-component',
    styleUrls: ['dashboard.component.scss'],
    template: `
        <div class="dashboardComponent">
            <h1>{{title}}</h1>
            
            <div class="topHeader">
                <counter-component
                    [total] = "(passengers?.length)"
                    [valid] = "(checkedInAmount())">

                </counter-component>

                <searchHeader-component
                    [searchQuery] = "(searchQuery)"
                    (onFilterChange) ="(handleFilterList($event))">

                </searchHeader-component>
            </div>

            <div class="listHeader">
                <div>Name</div>
                <div>Surname</div>
                <div>birthday</div>
                <div>e-mail</div>
                <div>children</div>
                <div style="flex: 0 0 130px;"></div>
            </div>
            <div class="tableContainer">
                <tableItem-component
                    *ngFor = "let passenger of passengerList"
                    [detail] = "passenger"
                    (onRemoveFromList) = "handleRemoveFromList($event)">

                </tableItem-component>
            </div>
            
        </div>
    `
})

export class DashboardComponent implements OnInit{
    @Input()
        passengers: People[];

    passengerList: People[];
    searchQuery: string;

    constructor() {
    };

    ngOnInit () {
        this.passengerList = [...this.passengers];
        this.searchQuery = null;
    }

    checkedInAmount = () => {
        if(!this.passengers) {
            return 0
        }

        return this.passengers.filter((passenger: People)=> passenger.checkedIn == true).length;
    };

    handleFilterList = (queryValue: string) => {
        this.passengerList = this.passengers.filter( (passenger, i) => {
            let x = false;

            for (let key in passenger) {

                if (passenger[key].toString().toLowerCase().indexOf(queryValue.toLocaleLowerCase()) !== -1) {
                   x = true
                }
            }

            return x
        })
    };

    handleRemoveFromList = (id: string) => {
       this.passengerList = this.passengerList.filter(passenger =>{
            return passenger.id !== id
        })
    }

}