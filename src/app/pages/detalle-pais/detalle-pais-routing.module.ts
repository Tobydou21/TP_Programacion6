import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePaisPage } from './detalle-pais.page';

const routes: Routes = [
    {
        path: '',
        component: DetallePaisPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DetallePaisPageRoutingModule { }