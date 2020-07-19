import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LigaListComponent } from './cuadrangular/cuadrangular.component';

const routes: Routes = [
  { path: 'liga-list', component: LigaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
