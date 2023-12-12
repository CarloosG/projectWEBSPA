import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancionListComponent } from './cancion-list/cancion-list.component';
import { CreateCancionComponent } from './create-cancion/create-cancion.component';
import { UpdateCancionComponent } from './update-cancion/update-cancion.component';

const routes: Routes = [
  {path: 'canciones', component: CancionListComponent},
  {path:'create-cancion',component: CreateCancionComponent},
  {path: '', redirectTo: 'canciones', pathMatch: 'full'},
  {path: 'update-cancion/:id',component: UpdateCancionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
