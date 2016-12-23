import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {
    HeaderComponent,
    FooterComponent,
    MapComponent,
    CitiesTableComponent,
    CityCardComponent
} from './components';

import { CitiesInfoComponent } from './containers';

import { WeatherService } from './services';

import 'style!./app.css';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        CitiesInfoComponent,
        HeaderComponent,
        FooterComponent,
        MapComponent,
        CitiesTableComponent,
        CityCardComponent
    ],
    providers: [WeatherService],
    bootstrap: [CitiesInfoComponent]
})
export class AppModule { }