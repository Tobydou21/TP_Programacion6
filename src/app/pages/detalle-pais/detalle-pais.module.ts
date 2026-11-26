import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';
import { DetallePaisPageRoutingModule } from './detalle-pais-routing.module';
import { DetallePaisPage } from './detalle-pais.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetallePaisPageRoutingModule,
    ],
    declarations: [DetallePaisPage],
})
export class DetallePaisPageModule { }