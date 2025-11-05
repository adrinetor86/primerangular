import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-formulario-binding',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioBindingComponent {

  public user: any;
  public mensaje: string;

  constructor() {
    this.mensaje = ""
    this.user = {
      nombre: "",
      apellidos: "",
      edad: 0
    }
  }

  recibirDatos(){
    this.mensaje = "Datos Recibidos";
  }
}
