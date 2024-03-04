import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NbThemeModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { TryComponent } from './try.component';
import { Try2Component } from './try2/try2.component';
import { TryService } from './try2/try.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { NbLayoutModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';


@NgModule({  
  declarations: [
    AppComponent,
    TryComponent,
    Try2Component,
    LoginComponent,
    SignupComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbAuthModule.forRoot(),
    FormsModule ,
    NbCardModule,
    NbLayoutModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    TryService 
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
