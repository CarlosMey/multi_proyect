import { Component } from '@angular/core';
import { Empleado } from './models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  listEmpleados:Empleado[]=[
    {legajo:1, nombre:'Carlos', apellido:'Mey', sexo:'Masculino', salario:25000},
    {legajo:2, nombre:'Freddy', apellido:'Morales', sexo:'Masculino', salario:2500},
    {legajo:3, nombre:'Mayssa', apellido:'Oviedo', sexo:'Femenino', salario:35000},
    {legajo:4, nombre:'Gregorio', apellido:'Miranda', sexo:'Masculino', salario:15000},
    {legajo:5, nombre:'Mayra', apellido:'Luna', sexo:'Femenino', salario:20000},
  ]

  radioButtonSelecionado = 'todos'

  obtenerEmpleados():number{
    return this.listEmpleados.length
  }
  obtenerFemeninos():number{
    return this.listEmpleados.filter(x => x.sexo === 'Femenino').length
  }
  obtenerMasculinos():number{
    return this.listEmpleados.filter(x => x.sexo === 'Masculino').length
  }

  empleadoCountRadioButtonChange(radioButtonSelecionado:string): void{
    this.radioButtonSelecionado = radioButtonSelecionado
  }
  
}
