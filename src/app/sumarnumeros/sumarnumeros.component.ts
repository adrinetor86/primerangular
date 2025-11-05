import {Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-sumarnumeros',
  standalone: false,
  templateUrl: './sumarnumeros.component.html',
  styleUrl: './sumarnumeros.component.css',
})
export class SumarnumerosComponent {

  @ViewChild("cajaNumA") cajaNumARef: ElementRef;
  @ViewChild("cajaNumB") cajaNumBRef: ElementRef;

  public suma: number;

  constructor() {

    this.suma = 0;

    this.cajaNumARef = new ElementRef(0);
    this.cajaNumBRef = new ElementRef(0);

  }

  sumarNumeros() {

    let num1 = this.cajaNumARef.nativeElement.value;
    let num2 = this.cajaNumBRef.nativeElement.value;
    this.suma = parseInt(num1) + parseInt(num2);

  }

}
