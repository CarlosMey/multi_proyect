import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://gorest.co.in/public/v2/users';
  token = 'ea948f5fa975670af833d2e884b4a44561ade0d47f5a8828dfe289ed766c3e6e';

  constructor(private http:HttpClient) { }

  getUsuarios():Observable<any>{
    return this.http.get<any>(this.url+'?access-token='+this.token);
  }

}
