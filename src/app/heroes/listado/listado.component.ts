import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes:string[]=['Spiderman','Iroman','hulk','thor','capitan'];
  heroeBorrado:string = '';
  mostrar:boolean = false;
  
  borrarHeroe():void{

    this.heroeBorrado =this.heroes.shift()||'';
    this.mostrar = true;
   
  }
  
}
