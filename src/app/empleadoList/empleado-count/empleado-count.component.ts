import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empleado-count',
  templateUrl: './empleado-count.component.html',
  styleUrls: ['./empleado-count.component.css']
})
export class EmpleadoCountComponent {

  @Input() todos: number;
  @Input() femeninos: number;
  @Input() masculinos: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSelecionado = 'todos';

  constructor(){
    this.todos = 0;
    this.femeninos = 0;
    this.masculinos = 0;
  }

  radioChange(): void{
    this.countRadioButtonChange.emit(this.radioButtonSelecionado)
  }
}
