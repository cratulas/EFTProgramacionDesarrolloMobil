import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisasPageRoutingModule } from './visas-routing.module';

import { VisasPage } from './visas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisasPageRoutingModule
  ],
  declarations: [VisasPage]
})
export class VisasPageModule {}
