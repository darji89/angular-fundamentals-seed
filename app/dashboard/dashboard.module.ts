import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CounterComponent} from "./components/counter/counter.component";
import {DashboardComponent} from "./containers/dashboard.component";
import {SearchHeaderComponent} from "./components/searchHeader/searchHeader.component";
import {TableComponent} from "./components/table/table.component";
import {TableItemComponent} from "./components/tableItem/tableItem.component";


@NgModule({
    declarations: [
        CounterComponent,
        DashboardComponent,
        SearchHeaderComponent,
        TableComponent,
        TableItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        DashboardComponent
    ]
})

export class DashboardModule{}