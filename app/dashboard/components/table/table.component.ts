import {Component} from "@angular/core";

@Component({
    selector: 'table-component',
    styleUrls: ['table.component.scss'],
    template: `
    <div class="table-component">
        
    </div>
    `

})

export class TableComponent {
    constructor() {
        console.log(this);
    }
}