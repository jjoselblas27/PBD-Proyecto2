import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservacionesNewPage } from './reservaciones-new.page';

const routes: Routes = [
  {
    path: '',
    component: ReservacionesNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservacionesNewPageRoutingModule {}
