import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NbThemeModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { NbLayoutModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';


@NgModule({  
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    ItemsComponent,
    ItemComponent
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
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
