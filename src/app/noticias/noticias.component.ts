import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {

  listNoticias:any[] = [];
  loading = false;

  key = 'dc6368da7d3d4ddc97701619e6f0dae3'

  constructor(private _noticiaService: NoticiaService){}

  buscarNoticias(parametros:any){
    this.loading = true;
    this.listNoticias = [];
    console.log('padre');
    console.log(parametros);

    setTimeout(()=>{
      this._noticiaService.getNoticias(parametros).subscribe(data => {
        this.loading = false;
        console.log(data);
        this.listNoticias = data.articles;
      }, error => {
        console.log(error);
        this.loading = false;
      })
    },1600)
  }
}
