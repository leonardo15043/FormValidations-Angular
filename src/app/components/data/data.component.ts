import { Component } from '@angular/core';
import { FormGroup, FormControl , Validators , FormArray} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {

  forma:FormGroup;

  constructor() {

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('',  [ Validators.required , Validators.minLength(4) ] ),
        'apellido': new FormControl('', Validators.required),
      }),
      'correo': new FormControl('', [ Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$") ] ),
      'pasatiempos': new FormArray([
        new FormControl('', Validators.required )
      ])
    })

  }

  guardarCambios(){
    console.log(this.forma);
    this.forma.reset();
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }



}
