import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs';

let weatherData = require('./weather-data.json');

@Injectable()
export class WeatherService {

    private weatherApi: string = 'http://api.openweathermap.org/data/2.5/find';

    public constructor(private http: Http) { }

    public getWeatherForCities(position: Position, citiesCount: number, isMock?: boolean): Observable<wa.entities.ICitiesInfos> {
        if (isMock) {
            return Observable.of(weatherData);
        }

        let params = new URLSearchParams();
        params.set('lat', position.coords.latitude.toString());
        params.set('lon', position.coords.longitude.toString());
        params.set('cnt', citiesCount.toString());
        params.set('appid', 'a8f5a2be89e408a117d1cbf534303578');
        params.set('units', 'metric');

        return this.http.get(`${this.weatherApi}`, { search: params }).map(r => r.json());
    }
}