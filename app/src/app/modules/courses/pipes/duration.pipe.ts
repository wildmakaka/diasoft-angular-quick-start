import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export default class DurationPipe implements PipeTransform {
  transform(durationInMinutes: number): string {
    if (durationInMinutes < 60) {
      return durationInMinutes + ' минут';
    }

    const hours = Math.floor(durationInMinutes / 60);

    if (durationInMinutes % 60 === 0) {
      return hours + ' час(а) ';
    }
    return hours + ' час(а) ' + (durationInMinutes - hours * 60) + ' минут';
  }
}
