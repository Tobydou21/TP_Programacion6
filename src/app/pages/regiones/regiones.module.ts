import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';

import { RegionesPageRoutingModule } from './regiones-routing.module';
import { RegionesPage } from './regiones.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegionesPageRoutingModule,
    ],
    declarations: [RegionesPage],
})
export class RegionesPageModule { }