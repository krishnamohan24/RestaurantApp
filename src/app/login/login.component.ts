import { NgForOf, NgIf } from '@angular/common';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string[]=[];
  password:string[]=[];
  inputvalue:string="";
  pass:string="";
  myvar:boolean=false;
  c:number=0;
  constructor() { }
  
  submitfun()
  {
    for(let n of this.email)
    {
      if(this.inputvalue == n){
      console.log("email verified",this.inputvalue);
      const v:number=this.email.indexOf(n);
      console.log("data is",v,this.pass);
      if(this.pass === this.password[v])
      {
        console.log("password is valid");
        this.myvar=true;
        if(this.c==0){
        alert("Login Successfull\n Submit Again");
        this.c=1;
        }
      }
      else{
        alert("password is incorrect");
      }
          
    }
  }
  }
  ngOnInit(): void {
    this.email=["123.com","hero.com"];
    this.password=["123","123"];
    
   
  }

  
}

