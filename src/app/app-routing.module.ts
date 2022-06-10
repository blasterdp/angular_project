import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Login2Component } from './login-template/login2/login2.component';
import { SigninComponent } from './login/signin/signin.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'login', component: SigninComponent },
  { path: 'login2', component: Login2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
