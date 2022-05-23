import { Component, OnInit,Input,Output } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  constructor() { }
  Name:String="";
  Cost:number=0;
  Rating:number=0;
  Link:String="";
  name: String[]=[];
  cost:number[]=[];
  rating:number[]=[];
  link:String[]=[];
  
  ngOnInit(): void {
  }

  onsubmit()
  {
    this.name.push(this.Name);
    this.cost.push(this.Cost);
    this.rating.push(this.Rating);
    this.link.push(this.Link);
    alert("Data submited");
  }

}
