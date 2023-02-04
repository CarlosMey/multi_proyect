import { Component } from '@angular/core';
import { ImagenPixabayService } from '../services/imagen-pixabay.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent {
  nombreImagen: string;

  constructor(private _imagenService: ImagenPixabayService){
    this.nombreImagen = '';
  }

  buscarImagenes(){
    if(this.nombreImagen === ''){
      this._imagenService.setError('Agrega un texto de busqueda');
      return;
    }
    this._imagenService.enviarTerminoBusqueda(this.nombreImagen)
  }
}
