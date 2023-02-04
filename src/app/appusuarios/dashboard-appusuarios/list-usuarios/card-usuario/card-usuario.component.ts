import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit{

  @Input() user:any;
  imgUrl:string = '';
  firstName:string = '';
  email:string = '';

  constructor(){
   
  }
  
  ngOnInit():void{
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.imgUrl = this.user._links.avatar.href;
    console.log(this.firstName)
    console.log('adasd')
  }
  
}
