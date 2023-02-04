import { Component } from '@angular/core';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-dashboard-clima',
  templateUrl: './dashboard-clima.component.html',
  styleUrls: ['./dashboard-clima.component.css']
})
export class DashboardClimaComponent {
  urlImage = 'https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487090874274-FH2ZNWOTRU90UAF5TA2B/Weather+Targeting';
  ciudad = '';
  temperatura = 0;
  humedad = 0;
  clima = '';
  query = false;
  loading = false;
  mostrarError = false;

  constructor(private _climaService:ClimaService){}


  obtenerClima(){
    this.query = false;
    this.loading = true;
    console.log(this.ciudad)

    this._climaService.getClima(this.ciudad).subscribe(data => {
      console.log(data)
      this.loading = false;
      this.query = true;
      this.temperatura = data.main.temp - 273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
    }, error =>{
      this.loading = false;
      this.error();
    })
  }

  error(){
    this.mostrarError = true;
    setTimeout(()=>{
      this.mostrarError = false;
      this.ciudad = '';
    },3000)
  }
}
