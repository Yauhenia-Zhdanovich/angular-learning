import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'transformedDuration'})

export class TransformDurationPipe implements PipeTransform {
  public transform(value: number): string {
    if (value < 60) {
      return `${value} min`;
    }
    let hours: number = Math.floor(value / 60);
    let minutes: number = value - (hours * 60);
    if (minutes === 0) {
      return `${hours} h`;
    }
    return `${hours} h ${minutes} min`;
  }
}
