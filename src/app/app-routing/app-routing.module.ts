import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NbAuthComponent, NbLoginComponent, NbRegisterComponent } from '@nebular/auth';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { Try2Component } from '../try2/try2.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  //   //component:Try2Component
  // },
  { 
    path: '',
    component:LoginComponent,
  },
  {
    path: 'signup',
    component:SignupComponent
  },
  { 
    path: 'dashbord',
    component:Try2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
