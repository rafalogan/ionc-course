import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicePageRoutingModule } from './inice-routing.module';

import { InicePage } from './inice.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicePageRoutingModule,
    ComponentsModule
  ],
  declarations: [InicePage]
})
export class InicePageModule {}
