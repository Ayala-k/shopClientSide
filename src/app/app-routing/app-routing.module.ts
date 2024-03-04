import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NbAuthComponent, NbLoginComponent, NbRegisterComponent } from '@nebular/auth';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { MainComponent } from '../components/main/main.component';

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
    path: 'main',
    component:MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
