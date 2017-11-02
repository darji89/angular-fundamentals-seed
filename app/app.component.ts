import { Component, OnInit } from '@angular/core';
import people from './../people';
import {People} from "./models/interfaces";

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div class="app">
            <dashboard-component
                [passengers]="(passengers)">
                
            </dashboard-component>
        </div>
        
    `
})

export class AppComponent implements OnInit{
    idInputValue: string;
    nameInputValue: string;
    passengers: People[];
    title: string;

    constructor() {
        this.idInputValue = null;
        this.nameInputValue = null;
        this.title = 'Ultimate Angular boarding list!';
    }

    ngOnInit() {
      this.passengers = people;
    };

    handleInputChange = (field: string, value: string) => {
        this[field] = value;
    };

    handleClick = ()=> {

    };

}