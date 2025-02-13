import { Component, OnInit } from '@angular/core';
import { ILibros } from 'src/app/interfaz/iLibros';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone:false
})
export class InicioPage implements OnInit {
  libros: ILibros[] = []


  constructor(private librosService: LibrosService) { }

  ngOnInit() {

    this.librosService.getLibros().subscribe(data => {
      this.libros = data;
    });
  }

}
