import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http:HttpClient) { }

  getNoticias(parametros:any): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='
    +parametros.pais+'&category='+parametros.categoria+'&apiKey=dc6368da7d3d4ddc97701619e6f0dae3';
    return this.http.get(URL);
  }
}
