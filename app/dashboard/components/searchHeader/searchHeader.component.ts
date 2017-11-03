import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'searchHeader-component',
    styleUrls: ['searchHeader.components.scss'],
    template: `
        <div class="searchBox">
            <input
                    #searchInput
                    type = "text"
                    placeholder = "search here..."
                    [value] = "(searchQuery)"
                    (input) = "handleInputChange(searchInput.value)"/>

            <button (click) = "(handleClick())" >
                Edit
            </button>
        </div>
    `
})

export class SearchHeaderComponent {
    @Input()
        searchQuery: string;

    @Output()
        onFilterChange: EventEmitter<any>;

    @Output()
        toggleEdit: EventEmitter<any>;

    constructor() {
        this.onFilterChange = new EventEmitter();
        this.toggleEdit = new EventEmitter();
    };

    handleInputChange = (value: string) => {
        this.onFilterChange.emit(value);
    };

    handleClick = () => {
        this.toggleEdit.emit();
    };
}