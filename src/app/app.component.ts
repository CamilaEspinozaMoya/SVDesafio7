import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  zoom = 10;
  title = 'My first AGM project';
  lat = 19.4978;
  lng = -99.1269;
  geoJsonObject: Object;

  markers: Marker[] = [
    {
      name: 'Red Barn Stores 3858-CUAJIMALPA',
      addres: 'BOULEVARD MANUEL AVILA CAMACHO NO. 491 COL. PERIODISTAS C.P.11220',
      lat: 40.640771,
      lng: -74.016133,
    },
  ];


}

interface Marker {
  name?: string;
  addres?: string;
  lat: number;
  lng: number;
}

