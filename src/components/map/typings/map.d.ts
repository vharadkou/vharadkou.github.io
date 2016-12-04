declare namespace wa.map {
    interface IMarker {
        position: IMapPosition;
        infoText: string;
    }

    interface IMapPosition {
        lat: number;
        lng: number;
    }

    interface IInfoWindowOptions extends google.maps.InfoWindowOptions {
        map: google.maps.Map;
    }
}
