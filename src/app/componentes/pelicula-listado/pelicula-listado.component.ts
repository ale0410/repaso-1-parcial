import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula'; 

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  @Input() inputListadoPeliculas!: Pelicula[];

  constructor() { }

  ngOnInit(): void {
  }

}
