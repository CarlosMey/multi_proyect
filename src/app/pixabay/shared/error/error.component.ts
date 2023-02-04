import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenPixabayService } from '../../services/imagen-pixabay.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  texto = '';
  mostrar = false;
  suscripcion: Subscription

  constructor(private  _imagenService:ImagenPixabayService){
    this.suscripcion = this._imagenService.getError().subscribe(data => {
      this.mostrarMensaje();
      this.texto = data;
    })
  }

  ngOnDestroy():void{
    this.suscripcion.unsubscribe();
  }

  mostrarMensaje(){
    this.mostrar = true;
    setTimeout(() => {
      this.mostrar = false;
    },2000)
  }

}
