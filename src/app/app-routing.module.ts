import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'home', component: HomeComponent},
  {path : 'signUp', component: SignUpComponent},
  {path: "", component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
