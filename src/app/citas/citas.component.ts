import { Component } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {
  listCitas: any[] = [];

  agregarCita(cita: any){
    console.log('probando');
    console.log(cita)
    console.log(this.listCitas)
    this.listCitas.push(cita);
  }

  eliminarCitaListado(index:number){
    this.listCitas.splice(index,1);
  }
}
