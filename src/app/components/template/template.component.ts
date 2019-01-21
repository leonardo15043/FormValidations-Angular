import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent  {

  usuario:Object = {
    nombre: "Arturo",
    apellido: "Espinosa",
    email: "prueba@gmail.com"
  }

  constructor() { }

  guardar( forma:NgForm ){
    console.log( this.usuario );
  }

}
