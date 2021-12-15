import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservacionesNewPageRoutingModule } from './reservaciones-new-routing.module';

import { ReservacionesNewPage } from './reservaciones-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservacionesNewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReservacionesNewPage]
})
export class ReservacionesNewPageModule {}
