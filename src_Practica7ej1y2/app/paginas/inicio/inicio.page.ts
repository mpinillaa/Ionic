import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone:false
})
export class InicioPage implements OnInit {
adivina=Math.floor((Math.random()*100)+1)
mensaje="";
numero=0
mensajecard="enhorabuena acabaste"

  constructor() { }
    adiviniar(){
      if(this.numero<this.adivina){
        this.mensaje="Mas grande hp"

      }
      else if(this.numero>this.adivina){
        this.mensaje="Mas pequeño paleto"
      }
      else{
        this.mensaje="Acabé"
      }
    }
    
  

  ngOnInit() {
  }

}
