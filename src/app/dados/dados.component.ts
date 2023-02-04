import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {
  dadoLeft:string = '../../assets/dados/dice1.png';
  dadoRight:string = '../../assets/dados/dice1.png';

  numero1: number = 0;
  numero2: number = 0;

  valor:boolean = false;

  tirarDados(){
    this.valor = false;

    this.numero1 = 1 + Math.floor(Math.random() * 6);
    this.numero2 = 1 + Math.floor(Math.random() * 6);
    this.dadoLeft = `../../assets/dados/dice${this.numero1}.png`
    this.dadoRight = `../../assets/dados/dice${this.numero2}.png`

    if(this.numero1 === this.numero2){
      this.valor = true;
    }
  }
}
