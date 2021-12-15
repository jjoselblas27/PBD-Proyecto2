import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosViewPage } from './usuarios-view.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosViewPageRoutingModule {}
