import { Component  } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HolaMundo';
  placeHold = 'escriba aqui';
  deshabilitado = false;
  texto = ''
  valorTabla = true


  estudiantes: any=[
    {nombre:'Carlos', apellido:'Mey', edad:26},
    {nombre:'Carlos', apellido:'Mey', edad:26},
    {nombre:'Carlos', apellido:'Mey', edad:25},
    {nombre:'Carlos', apellido:'Mey', edad:25},
    {nombre:'Carlos', apellido:'Mey', edad:26},
  ]

  

  constructor(){
    setInterval(()=> this.title = 'HelloWorld', 1000)
  }

  mostrar(){
    this.valorTabla = !this.valorTabla
  }



}
