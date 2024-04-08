import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {
  //libros = ['Matematicas', 'Algoritmos', 'Algebra' ];

  libros = [];
  constructor(private librosService: LibrosService) {}
  private libroSubscription: Subscription;              //Crea una variable de subscripcion

  eliminarLibro(libro) {
    //this.libros = this.libros.filter( p => p !== libro ) //elimna el elemento seleccionado quitandolo de la lista
  }

  guardarLibro(f) {
    if (f.valid) {
      this.librosService.agregarLibros(f.value.nombreLibro);
      //   this.libros.push(f.value.nombreLibro); //Agrega el libro con el nombre desde el formulario
    }
  }

  ngOnInit() {
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe(() => {  //asigna el valor de la nueva subscripcion a los cambios del formulario libros
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(): void {
    this.libroSubscription.unsubscribe();   //Quita la subscripcion cuando ya no se esta usando el objeto
  }

}
