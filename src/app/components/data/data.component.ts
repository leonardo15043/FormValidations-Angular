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
      ]),
      'password1': new FormControl('', [ Validators.required , Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]{2})[a-zA-Z0-9]{8,15}") ] ),
      'password2': new FormControl()
    })

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind( this.forma )
    ])

  }

  guardarCambios(){
    console.log(this.forma);
  //  this.forma.reset();
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  noIgual( control: FormControl ):{ [s:string]:boolean }{

     let forma:any = this;

    if( control.value !== forma.controls['password1'].value ){
      return {
        noiguale:true
      }
    }else{
      return null;
    }

  }



}
