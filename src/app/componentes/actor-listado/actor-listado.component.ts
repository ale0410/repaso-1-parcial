import { FirestoreService } from 'src/app/servicios/firestore.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  actores : Actor[] = [];
  @Output() actorSeleccionado : EventEmitter<any>= new EventEmitter<any>(); 

  constructor(public srv: FirestoreService) { }

  ngOnInit(): void {
     this.srv.getCollection('Actor').then( (ref:any) => ref.subscribe((listadoRef:any) => {
       listadoRef.forEach((element : any) => {
         this.actores.push(element.payload.doc.data());
       });
      }));
  }

  getActorSeleccionado(detalleActor: Actor){
    this.actorSeleccionado.emit(detalleActor);
  }

}