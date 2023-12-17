import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisaInfoPage } from './visa-info.page';

const routes: Routes = [
  {
    path: '',
    component: VisaInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisaInfoPageRoutingModule {}
