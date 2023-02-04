import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';
  key = '0adce55efbd03a564a53a5b234ad86f0';
  constructor(private http:HttpClient) { }

  getClima(ciudad:string):Observable<any>{
    const URL = this.url + this.key + '&q=' + ciudad
    return this.http.get(URL)
  }
}
