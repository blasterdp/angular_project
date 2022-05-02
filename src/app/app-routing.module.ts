import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './login/signin/signin.component';
import { ListaTareasComponent } from './todo/lista-tareas/lista-tareas.component';

const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'todo', component: ListaTareasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
