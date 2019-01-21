import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`

    .ng-invalid.ng-touched:not(form){
      border:solid 1px red;
    }

    `]
})
export class TemplateComponent  {

  usuario:Object = {
    nombre: null,
    apellido: null,
    email:null
  }

  constructor() { }

  guardar( forma:NgForm ){
    console.log( forma );
  }

}
