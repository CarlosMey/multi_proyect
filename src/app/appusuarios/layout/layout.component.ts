import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private router:Router){

  }

  irDashboard(): void{
    // Guardar datos en el formulario o se hace logica 
    //redireccion
    this.router.navigate(['/dashboard'])

  }
}
