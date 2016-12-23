import { Component, Input } from '@angular/core';

@Component({
    selector: 'wa-cities-table',
    templateUrl: './cities-table.html',
    styleUrls: ['./cities-table.css']
})
export class CitiesTableComponent {
    @Input() public citiesInfos: wa.components.citiesTable.ICity[];
    @Input() public tableHeaders: wa.components.citiesTable.ITableHeader[];

    public constructor() {

    }
}