import { Component } from '@angular/core';


@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent {
  title = 'Piano';


  aplicarSonido(numero:number){
    const sonido = new Audio()
    sonido.src= `../../../assets/sonidos/note${numero}.wav`;
    sonido.load();
    sonido.play();
  }
}
