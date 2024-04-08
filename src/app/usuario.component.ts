import {Component} from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})

export class UsuarioComponent{

  usuarios = ['Luis', 'Juan', 'Maria'];
  usuarioNombre = 'Ingrese su nombre';
  visible = false;

  constructor(){
    setTimeout( () => {
      this.visible = true
    },
    3000
    )
  }

  onAgregarUsuario(){
    this.usuarios.push(this.usuarioNombre);
  }

}
