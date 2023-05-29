import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export default class FilterPipe implements PipeTransform {
  transform(value: any[], searchText: string, propName: string): any[] {
    const resultArray = [];
    if (value.length == 0 || searchText === '' || propName === '') {
      return value;
    }
    for (const item of value) {
      if (item[propName].toLowerCase().includes(searchText.toLowerCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
