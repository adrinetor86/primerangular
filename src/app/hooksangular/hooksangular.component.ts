import {Component,OnInit,DoCheck} from '@angular/core';

@Component({
  selector:"hooks-angular",
  standalone:false,
  templateUrl:"hooksangular.component.html",
  styleUrls:['hooksangular.component.css'],
})

export class HooksAngular implements OnInit,DoCheck {

  ngOnInit(){
    console.log("Soy OnInit");
  }
  ngDoCheck(){
    console.log("Soy DoCheck");
  }
  constructor() {
    console.log("Constructor: Primer metodo de inicio de Component")
  }
}
