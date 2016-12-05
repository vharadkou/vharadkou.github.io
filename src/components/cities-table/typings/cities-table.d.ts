declare namespace wa.components.citiesTable {
    interface ICitiyInfo {
        city: string;
        lat: number;
        lng: number;
        temperature: number;
        humidity: number;
        pressure: number;
        windDegree: number;
        windSpeed: number;
        clouds: number;
    }

    interface ITableHeader {
        name: string;
        value: string;
    }
}