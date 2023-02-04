import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista-de-cistas',
  templateUrl: './lista-de-cistas.component.html',
  styleUrls: ['./lista-de-cistas.component.css']
})
export class ListaDeCistasComponent {

  @Input() listadoCitas: any
  @Output() deleteCita = new EventEmitter<number>();

  eliminarCita(index:number){
    this.deleteCita.emit(index)
  }
}
