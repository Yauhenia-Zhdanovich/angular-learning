import { Pipe, PipeTransform } from '@angular/core';
import { MIN_IN_HOURS } from '../../shared/constants/time-constants';

@Pipe({name: 'transformedDuration'})

export class TransformDurationPipe implements PipeTransform {
  public transform(value: number): string {
    if (value < MIN_IN_HOURS) {
      return `${value} min`;
    }
    let hours: number = Math.floor(value / MIN_IN_HOURS);
    let minutes: number = value - (hours * MIN_IN_HOURS);
    if (minutes === 0) {
      return `${hours} h`;
    }
    return `${hours} h ${minutes} min`;
  }
}
