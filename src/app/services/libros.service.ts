import { Subject } from "rxjs";



export class LibrosService {

  librosSubject = new Subject();

  private libros = ['Libro de JAVA', 'Libro de PHP', 'Libro de c#'];

  agregarLibros(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next();
  }

  obtenerLibros() {
    return [...this.libros];
  }

  eliminarLibros(libroNombre: string){
    this.libros= this.libros.filter (x => x !== libroNombre);
    this.librosSubject.next();
  }

}
