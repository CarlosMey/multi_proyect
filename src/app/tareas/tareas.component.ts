import { Component, OnInit } from '@angular/core';
import { Tarea } from './models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit{
  listTareas:Tarea[] = [];
  nombreTarea:string = '';
  
  ngOnInit(){
    const dataTareas = localStorage.getItem('tareas');
    if(dataTareas !== null){
      this.listTareas = JSON.parse(dataTareas);
    }
  }
  
  agregarTarea(){
    // Crear tarea 
    const tarea:Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    }
    // Agregar el objeto tarea al array;
    this.listTareas.push(tarea)
    console.log(this.listTareas)
    // Reset form
    this.nombreTarea = ''
    localStorage.setItem('tareas', JSON.stringify(this.listTareas))
  }

  eliminarTarea(index:number){
    this.listTareas.splice(index,1);
    localStorage.setItem('tareas', JSON.stringify(this.listTareas))

  }

  actualizarTarea(tarea:Tarea,index:number){
    this.listTareas[index].estado = !tarea.estado
  }




}
