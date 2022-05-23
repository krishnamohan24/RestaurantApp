import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cslogin',
  templateUrl: './cslogin.component.html',
  styleUrls: ['./cslogin.component.css']
})
export class CsloginComponent implements OnInit {
  login:boolean=true;
  signup:boolean=false;
  sname:String="";
  semail:String="";
  spass1:String="";
  spass2:String="";
  cemail:String="";
  cpass:String="";
  name:String []=[];
  email:String[]=[];
  pass:String[]=[];
  myvar:boolean=false;
  c:number=0;
  constructor() { }

  ngOnInit(): void {
    this.login=true;
    this.signup=false;
  }
  signupfun()
  {
    this.login=false;
    this.signup=true;
  }
  signupButton()
  {
    console.log("values",this.sname,this.semail,this.spass1,this.spass2);
    if(this.spass1 === this.spass2)
    {
      
      this.name.push(this.sname);
      this.email.push(this.semail);
      this.pass.push(this.spass1);
      alert("signup successfull..");
      this.login=true;
      this.signup=false;
    }
    else{
      alert("password confirmation has failed!");
    }
  }
  submitfun()
  {
    for(let n of this.email)
    {
      if(this.cemail == n)
      
      {
      console.log("email verified",this.cemail);
      const v:number=this.email.indexOf(n);
      console.log("data is",v,this.pass);
      if(this.cpass === this.pass[v])
      {
        console.log("password is valid");
        
        this.myvar=true;
        if(this.c==0)
        {
          alert("Login successfull \n Submit Again");
          this.c=1;
        }
      }}
    }
    if(this.c===0 ||this.cemail=="" || this.cpass=="")
    {
        alert("enter valid credentials");
        this.cemail="";
        this.cpass="";
    }
    
 
 
    }
}
