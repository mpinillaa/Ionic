import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  standalone: false
})
export class Page1Page implements OnInit {
  tituloCabecera = 'Bienvenido a ionic hijo de puta';
  tituloCard = 'Practica para aprender';
  subtituloCard = 'Puedes pulsar cualquiera de los dos botones que aparecen abajo:el de la izquierda navegará a la página... y el de la derecha lo hará a la siguiente pagina';
  contenidoCard = 'Este es el contenido de la Página 1.';
  textoPie = 'Pie de Página 1';
  constructor() {
    
   }

  ngOnInit() {
  }

}
