import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cistas',
  templateUrl: './crear-cistas.component.html',
  styleUrls: ['./crear-cistas.component.css']
})
export class CrearCistasComponent {
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';

  formularioIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<any>();

  agregarCita(){
    if(this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == ''){
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;

    const cita = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    this.nuevaCita.emit(cita)
    this.resetCampos();
  }
  resetCampos(){
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}
