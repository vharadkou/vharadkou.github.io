declare namespace wa.components.citiesTable {
    interface ICity {
        name: string;
        lat: number;
        lng: number;
        temperature: number;
        humidity: number;
        pressure: number;
        windDegree: number;
        windSpeed: number;
        clouds: number;
        icon: string;
        weatherDescription: string;
    }

    interface ITableHeader {
        name: string;
        value: string;
    }
}