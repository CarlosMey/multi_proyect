import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  peso = 50;
  edad = 26;
  altura = 170;
  sexo = 'femenino';

  constructor(private router: Router){

  }

  cambiarAltura(event: any){
    this.altura = event.target.value
  }
  masculino(){

  }
  femenino(){

  }
  calcularBMI(){
    const BMI = this.peso / Math.pow(this.altura/100,2);
    console.log()
    this.router.navigate(['resultado',BMI.toFixed(1)]);
  }
}
