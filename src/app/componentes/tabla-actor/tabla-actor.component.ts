import {  Component, OnInit, Input ,Output,EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor'; 

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  @Input() listadoActores!: Actor[];
  @Output() actorSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetalles(parametroActor: any)
  {
  	console.log("tabla");
    this.actorSeleccionado.emit(parametroActor);
  }

}
