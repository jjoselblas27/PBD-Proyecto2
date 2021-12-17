import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosViewPageRoutingModule } from './usuarios-view-routing.module';

import { UsuariosViewPage } from './usuarios-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosViewPageRoutingModule
  ],
  declarations: [UsuariosViewPage]
})
export class UsuariosViewPageModule {}
