import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';  
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CsloginComponent } from './cslogin/cslogin.component';
import { PortalComponent } from './portal/portal.component';

import { InputComponent } from './input/input.component';
import { CsportalComponent } from './csportal/csportal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    HomeComponent,
    CsloginComponent,
    PortalComponent,
    InputComponent,
    CsportalComponent,
    NavbarComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
