import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CsloginComponent } from './cslogin/cslogin.component';
import { PortalComponent } from './portal/portal.component';

import { InputComponent } from './input/input.component';
import { CsportalComponent } from './csportal/csportal.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"cslogin",component:CsloginComponent},
  {path:"login/portal",component:PortalComponent},
  {path:"portal/input",component:InputComponent},
  {path:"cslogin/csportal",component:CsportalComponent},
  {path:"",component:NavbarComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
