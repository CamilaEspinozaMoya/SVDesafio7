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
  markers = [];

  constructor(public _dataService: DataService) {
  }
  OnInit() {
    this._dataService.getData()
    .subscribe( resData => this.markers = resData);
  }
}

interface Marker {
  name?: string;
  addres?: string;
  lat: number;
  lng: number;
}

