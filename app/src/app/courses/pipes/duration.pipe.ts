import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export default class DurationPipe implements PipeTransform {
  transform(durationMinutes: number): string {
    if (durationMinutes < 60) {
      return durationMinutes + ' минут';
    }

    const hours = Math.floor(durationMinutes / 60);

    console.log(durationMinutes / 60);

    if (durationMinutes % 60 === 0) {
      return hours + ' час(а) ';
    }

    return hours + ' час(а) ' + (durationMinutes - hours * 60) + ' минут';
  }
}
