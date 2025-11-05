import {Component} from '@angular/core';


@Component({
  selector:'deportes-component',
  templateUrl:'deportes.component.html',
  standalone:false,
  styleUrls:['deportes.component.css']
})


export class DeportesComponent {

  public sports: Array<string>;
  numeros:Array<number>;
  constructor() {
    this.numeros=[1,2,3,5,6,7,8,9]
    this.sports = ["Canicas","Curling","Futbol","Baloncesto","dardos"]
  }
}
