import {Component} from '@angular/core';

//UN COMPONENT DEBE TENER SIEMPRE LA DECLARACION DE SU CONTENIDO

@Component({
  //DEBEMOS DECLARAR EL NOMBRE DEL COMPONENT
  //MEDIANTE SU SELECTOR HTML
  //EN ANGULAR LOS SELECTORES LLEVAN GUION

  selector:"primer-component",
  //POR AHORA NO VOY A TENER HTML SEPARADO
  standalone:false,
  templateUrl:"primer.component.html",
  styleUrls:['primer.component.css'],
  })

//CADA COMPONENT SIEMPRE DEBE TENER UNA CLASE ASOCIADA EN SU TS
//DICHO NOMBRE DE CLASE SI LLEVA MAYUSCULAS Y SE DECLARA DENTRO DE app-module.ts
export class PrimerComponent {
  //AQUI ES DONDE SE DECLARAN LAS VARIABLES

   titulo:string;
   year:number;

   cambiarMensaje(){
    console.log(this.titulo);
    this.titulo="y mañana jueves!!!"
     console.log("Mensaje cambiado "+this.titulo);
   }

   metodoString():string{

     return "El año es: " + this.year;
   }
  constructor() {
    this.titulo="Hoy es miercoles";
    this.year=20;
  }

}
