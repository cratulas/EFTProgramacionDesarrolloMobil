import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisaInfoPageRoutingModule } from './visa-info-routing.module';

import { VisaInfoPage } from './visa-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisaInfoPageRoutingModule
  ],
  declarations: [VisaInfoPage]
})
export class VisaInfoPageModule {}
