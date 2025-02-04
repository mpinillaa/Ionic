import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  standalone: false
})
export class Page1Page implements OnInit {
  tituloCabecera = 'Página 2';
  tituloCard = 'Bienvenido a la Página 2';
  subtituloCard = 'Detalles de la Página 2';
  contenidoCard = 'Este es el contenido de la Página 2.';
  textoPie = 'Pie de Página 2';
  constructor() {
    
   }

  ngOnInit() {
  }

}
