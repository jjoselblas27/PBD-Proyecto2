import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'comentarios/new',
    loadChildren: () => import('../comentarios/new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'comentarios/edit/:id_comentario',
    loadChildren: () => import('../comentarios/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
