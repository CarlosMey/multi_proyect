import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-noticias',
  templateUrl: './navbar-noticias.component.html',
  styleUrls: ['./navbar-noticias.component.css']
})
export class NavbarNoticiasComponent {
  @Input() titulo:string;

  constructor(){
    this.titulo = '';
  }
}
