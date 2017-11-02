import {Component, Input} from '@angular/core';

@Component({
    selector: 'counter-component',
    template: `
        <div>
            Passengers checked in: {{valid}}/ {{total}}
        </div>
    `
})

export class CounterComponent{
    @Input() total: number;
    @Input() valid: number;

    constructor() {

    }
}