import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services';

@Component({
    selector: 'cities-info',
    templateUrl: './cities-info.html',
    styleUrls: ['./cities-info.css']
})
export class CitiesInfoComponent implements OnInit {

    public position: wa.map.IMapPosition;
    public markers: wa.map.IMarker[];

    public constructor(private weatherService: WeatherService) { }

    public ngOnInit(): void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.position = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                this.weatherService.getWeatherForCities(position, 50, true).subscribe(info => {
                    this.markers = info.list.map(city => {
                        return {
                            position: { lat: city.coord.lat, lng: city.coord.lon },
                            infoText: `<div>${city.name} ${city.main.temp}&#8451;</div>`
                        }
                    })
                })
            });
        } else {
            // error
        }
    }
}