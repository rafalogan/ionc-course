import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicePage } from './inice.page';

const routes: Routes = [
  {
    path: '',
    component: InicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicePageRoutingModule {}
