import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { Page1Page } from './paginas/page1/page1.page';
import { PieComponent } from './componentes/pie/pie.component';

const routes: Routes = [




  {
    path: 'cabecera',  // La ruta que desees usar
    component: CabeceraComponent  // El componente que deseas cargar
  },



  {
    path: 'pie',  // La ruta que desees usar
    component: PieComponent  // El componente que deseas cargar
  },

  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./paginas/page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./paginas/page2/page2.module').then( m => m.Page2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
