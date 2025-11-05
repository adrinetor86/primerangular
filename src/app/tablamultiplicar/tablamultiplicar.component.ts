import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css',
})
export class TablamultiplicarComponent {

  @ViewChild("cajaNumero") cajaNum: ElementRef
  public arrOperacion: Array<number> = [];
  public num: number=0;

  constructor() {
    this.cajaNum = new ElementRef(0)

  }

  generarTabla() {
    this.num = this.cajaNum.nativeElement.value
    this.arrOperacion = []

    for (let i = 1; i <= 10; i++) {
      this.arrOperacion.push(i * this.num)
    }
    console.log(this.cajaNum.nativeElement.value);


  }
}
