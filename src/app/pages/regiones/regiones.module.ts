import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular/lazy';
import { RegionesPageRoutingModule } from './regiones-routing.module';
import { RegionesPage } from './regiones.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
        RegionesPageRoutingModule,
    ],
    declarations: [RegionesPage],
})
export class RegionesPageModule { }