import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Marker } from '@agm/core/services/google-maps-types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public _url = '././store_directory.json';
  constructor(public _http: Http) { }
  getData() {
    return this._http.get(this._url);
      .map((response: Response) => response.json());
  }
}
