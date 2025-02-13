import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ILibros} from '../interfaz/iLibros'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  getLibros(): Observable<ILibros[]> {
    return this.http.get<ILibros[]>('../../assets/data/Libros.js')
  }
}
