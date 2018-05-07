import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Stacje } from '../models/Stacje';
import { StacjePobliskie } from '../models/StacjePobliskie';
import { StacjaZHistoria } from '../models/StacjaZHistoria';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }



  getStacjeObszar(latSW: string, longSW: string, latNE: string, longNE: string): Observable<Array<Stacje>> {
    const glowa = new HttpHeaders().set('apikey', '1NKacRl7L3HQFVyJPwG9IaySBTjhnJWa');
    const parametry = new HttpParams().set('southwestLat', latSW).set('southwestLong', longSW)
    .set('northeastLat', latNE).set('northeastLong', longNE);
    return this.http.get<Array<Stacje>>(
      'https://airapi.airly.eu/v1/sensorsWithWios/current',
      {headers: glowa, params: parametry});
  }

  getStacjaPobliska(lat: string, long: string): Observable<StacjePobliskie> {
    const glowa = new HttpHeaders().set('apikey', '1NKacRl7L3HQFVyJPwG9IaySBTjhnJWa');
    const parametry = new HttpParams().set('latitude', lat).set('longitude', long).set('maxDistanc', '10000');
    return this.http.get<StacjePobliskie>(
      'https://airapi.airly.eu/v1/nearestSensor/measurements',
      {headers: glowa, params: parametry});
  }

  getStacjaID(id: string): Observable<StacjaZHistoria> {
    const glowa = new HttpHeaders().set('apikey', '1NKacRl7L3HQFVyJPwG9IaySBTjhnJWa');
    const parametry = new HttpParams().set('sensorId', id);
    return this.http.get<StacjaZHistoria>(
      'https://airapi.airly.eu/v1/sensor/measurements',
      {headers: glowa, params: parametry});
  }

}
