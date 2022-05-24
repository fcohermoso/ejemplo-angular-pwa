import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVendehumosComponent } from './lista-vendehumos/lista-vendehumos.component';
import { NuevoVendehumosComponent } from './nuevo-vendehumos/nuevo-vendehumos.component';

const routes: Routes = [
  {
    path: '', component: ListaVendehumosComponent
  },
  {
    path: 'nuevo-vendehumos', component: NuevoVendehumosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
