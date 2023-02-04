import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {
  nombreGasto: string;
  cantidad:number;
  formularioIncorrecto:boolean;
  textIncorrecto:string;

  constructor(private _presupuestoService: PresupuestoService){
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto = '';

  }


  agregarGasto(){

    if(this.cantidad > this._presupuestoService.restante){
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Cantidad ingresada es mayor al restante';
      return;
    }

    if(this.nombreGasto === '' || this.cantidad <= 0){
      this.formularioIncorrecto = true;
    }else{

      const gasto = {
        nombre:this.nombreGasto,
        cantidad:this.cantidad
      }

      this._presupuestoService.agregarGasto(gasto)

      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }
}
