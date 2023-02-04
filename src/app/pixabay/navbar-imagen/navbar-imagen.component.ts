import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-imagen',
  templateUrl: './navbar-imagen.component.html',
  styleUrls: ['./navbar-imagen.component.css']
})
export class NavbarImagenComponent {
  @Input() titulo: string;


  constructor(){
    this.titulo = '';
  }
}
