import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actorAlta'
})
export class ActorAltaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
