import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { DonelistComponent } from './donelist/donelist.component';


const routes: Routes = [
  { path: '', redirectTo: '/todolist', pathMatch: 'full'},
  { path: 'todolist', component:TodolistComponent},
  { path: 'done', component: DonelistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
