import { Component } from '@angular/core';

@Component({
  selector: 'deportes2-component',
  standalone: false,
  templateUrl: './deportes2.component.html',
  styleUrl: './deportes2.component.css',
})
export class Deportes2Component {


  public sports: Array<string>;
  numeros:Array<number>;
  constructor() {
    this.numeros = [1, 2, 3, 5, 6, 7, 8, 9]
    this.sports = ["Canicas", "Curling", "Futbol", "Baloncesto", "dardos"]

  }
}
