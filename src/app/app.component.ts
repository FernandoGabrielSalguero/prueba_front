import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hide = true;
  formularioAltaUsuario!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private service:FormService
   ){

  }
  ngOnInit(){
    this.inicializarFormulario();
  }
  inicializarFormulario(){
    this.formularioAltaUsuario = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      cell: ['', Validators.required]
    })
  }
  onSubmit(){
    const formData = this.formularioAltaUsuario.value;
    this.service.crearUsuario(formData)
    .subscribe({
      next: (resp) => {
        console.log(resp);
        if(resp.message){
          alert(`${resp.message}`);
        } else {
          alert(`${resp.message}`);
        }
      },
      error: (err) => {
        alert(`${err.message}`);
      },

    })
  }
}


