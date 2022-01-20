import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../models/aplikasi';
import { AplikasiService } from '../services/aplikasi.service';


@Component({
  selector: 'app-aplikasi-beranda',
  templateUrl: './aplikasi-beranda.component.html',
  styleUrls: ['./aplikasi-beranda.component.scss']
})
export class AplikasiBerandaComponent implements OnInit {
  lat:any;
  lon:any;
  weather:any;
  data:any
  curentTime = new Date;
  timeline= [];
  constructor(
    public dialog:MatDialog,
    private aplikasiservice: AplikasiService,
    public api:AplikasiService,
  ) { 

  }

  ngOnInit(): void {
    this.getLocation();
    this.get5DayWeather();
  }



  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
    
        this.lat =success.coords.latitude;
        this.lon =success.coords.longitude;

        this.api.getDataCuacaByCoords(this.lat, this.lon).subscribe(data =>{

          this.weather = data;
        })

      }
      
      )
    }

  }

  get5DayWeather(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition(success=>{
        this.lat =success.coords.latitude;
        this.lon =success.coords.longitude;

        this.api.get5DayWeather(this.lat, this.lon).subscribe(data =>{
          console.log(data);

          this.data = data;
        })

      }
      
      )
    }

  }

  getCity(city:any){
    this.api.getCuacaDataByCityName(city).subscribe((data:any) =>{
      this.weather =data;

      this.lat = data.coord.lat;
      this.lon = data.coord.lon;

    })

  }

  getCityFuture(city:any){
    this.api.getCuacaDataByName(city).subscribe((data:any) =>{
      this.data =data;

      this.lat = data.coord.lat;
      this.lon = data.coord.lon;

    })

  }

}
