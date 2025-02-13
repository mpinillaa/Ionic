import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PieComponent } from './componentes/pie/pie.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

const routes: Routes = [
  {
    path: 'pie',  // La ruta que desees usar
    component: PieComponent  // El componente que deseas cargar
  },

  {
    path: 'cabecera',  // La ruta que desees usar
    component: CabeceraComponent  // El componente que deseas cargar
  },
  
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./paginas/pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
