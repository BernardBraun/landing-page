import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { ServicosComponent } from './views/servicos/servicos.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path:"contato",
  component: ContatoComponent
},
{
  path: "servicos",
  component: ServicosComponent
},
{
  path: "sobre",
  component: SobreComponent
}];

export const routing: ModuleWithProviders<AppRoutingModule> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
