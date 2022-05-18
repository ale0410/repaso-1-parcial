import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  listadoPeliculas : [] | any = [];
  peliculaParaMostrar:Pelicula | any;

  constructor(private db : FirestoreService) { 
    this.peliculaParaMostrar = new Pelicula(0,'El Cabellero de la noche','Accion','13/08/2008',1500000,'https://image.tmdb.org/t/p/original/tSIH3DTA4oFQDhPaJgHxxQZoqHh.jpg','Christian Bale');
  }

  ngOnInit(): void {
    this.getPeliculas();
  }

  tomarPeliculaParaDetalle(peliculaMostrar: Pelicula){
    this.peliculaParaMostrar = peliculaMostrar;
  }

  getPeliculas(){
    this.db.getCollection('peliculas').then( (ref:any) => ref.subscribe((listadoRef:any) => {
      listadoRef.forEach((element : any) => {
        console.log(element.payload.doc.data());
        this.listadoPeliculas.push(element.payload.doc.data());
      });
     }));
  }

}
