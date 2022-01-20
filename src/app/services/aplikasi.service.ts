import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, switchMap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AplikasiService {

  url: string = 'http://api.openweathermap.org/data/2.5/weather';
  url2: string = 'http://api.openweathermap.org/data/2.5/forecast';
  apiKey:string = 'e69a711887eb404b1064bfc11ed3c8e6'

   // URL to web api

  constructor(
    private httpClient: HttpClient,
  ) { }

  getDataCuacaByCoords(lat:any, lon:any){
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.httpClient.get(this.url, {params});

   
  }

  getCuacaDataByCityName(city:string){
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.httpClient.get(this.url, {params});
  }

  getCuacaDataByName(city:string){
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.httpClient.get(this.url2, {params});
  }
  
  
get5DayWeather(lat:any, lon:any){
  let params = new HttpParams()
  .set('lat', lat)
  .set('lon', lon)
  .set('units', 'imperial')
  .set('appid', this.apiKey)

  return this.httpClient.get('http://api.openweathermap.org/data/2.5/forecast', {params });
}

getWeather(){
  return new Observable((observer)=>{
  navigator.geolocation.getCurrentPosition(
    (position)=>{
      observer.next(position)
    },
    (error)=>{
      observer.next(error)
    }
  )
  }).pipe(
    map((value:any)=>{
      return new HttpParams()
      .set('lon', value.coords.longitude)
      .set('lat', value.coords.latitude)
      .set('units', 'imperial')
      .set('appid', this.apiKey)
    }),
    switchMap((values)=>{
      return this.httpClient.get('http://api.openweathermap.org/data/2.5/forecast', {params : values });
    }
    )
  )
}
  
}
