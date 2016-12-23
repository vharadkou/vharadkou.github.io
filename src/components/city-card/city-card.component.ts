import { Component, Input } from '@angular/core';

@Component({
    selector: 'wa-city-card',
    templateUrl: './city-card.html',
    styleUrls: ['./city-card.css']
})
export class CityCardComponent {
    @Input() public cityInfo: wa.components.citiesTable.ICity;
}