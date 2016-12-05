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

    public citiesInfos: wa.components.citiesTable.ICitiyInfo[];
    public tableHeaders: wa.components.citiesTable.ITableHeader[];

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
                        };
                    });

                    this.citiesInfos = info.list.map(city => {
                        return {
                            city: city.name,
                            lat: city.coord.lat,
                            lng: city.coord.lon,
                            temperature: city.main.temp,
                            humidity: city.main.humidity,
                            pressure: city.main.pressure,
                            windDegree: city.wind.deg,
                            windSpeed: city.wind.speed,
                            clouds: city.clouds.all
                        };
                    });

                    this.tableHeaders = [
                        { name: 'city', value: 'City' },
                        { name: 'lat', value: 'Latitude' },
                        { name: 'lng', value: 'Longitude' },
                        { name: 'temperature', value: 'Temperature' },
                        { name: 'humidity', value: 'Humidity' },
                        { name: 'pressure', value: 'Pressure' },
                        { name: 'windDegree', value: 'Wind degree' },
                        { name: 'windSpeed', value: 'Wind speed' },
                        { name: 'clouds', value: 'Clouds' },
                    ];
                });
            });
        } else {
            // error
        }
    }
}