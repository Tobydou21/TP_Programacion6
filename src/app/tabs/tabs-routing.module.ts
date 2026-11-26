import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'paises',
        loadChildren: () =>
          import('../pages/paises/paises.module').then((m) => m.PaisesPageModule),
      },
      {
        path: 'regiones',
        loadChildren: () =>
          import('../pages/regiones/regiones.module').then((m) => m.RegionesPageModule),
      },
      {
        path: 'comparar',
        loadChildren: () =>
          import('../pages/comparar/comparar.module').then((m) => m.CompararPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/paises',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/paises',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }