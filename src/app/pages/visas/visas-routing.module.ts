import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisasPage } from './visas.page';

const routes: Routes = [
  {
    path: '',
    component: VisasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisasPageRoutingModule {}
