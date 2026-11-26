import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionesPage } from './regiones.page';

const routes: Routes = [
    {
        path: '',
        component: RegionesPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RegionesPageRoutingModule { }