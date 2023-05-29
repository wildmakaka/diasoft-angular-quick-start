import { Pipe, PipeTransform } from '@angular/core';
import { CourseInterface } from 'src/app/types/course.interface';

@Pipe({
  name: 'filter',
})
export default class FilterPipe implements PipeTransform {
  transform(
    value: CourseInterface[],
    searchText: string,
    propName: string
  ): CourseInterface[] {
    const resultArray: CourseInterface[] = [];
    if (value.length == 0 || searchText === '' || propName === '') {
      return value;
    }
    for (const item of value) {
      let itemString = item[propName as keyof CourseInterface];

      if (
        typeof itemString === 'string' &&
        itemString.toLowerCase().includes(searchText.toLowerCase())
      ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
