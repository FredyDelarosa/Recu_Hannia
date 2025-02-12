import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper',
  standalone: true
})
export class UpperPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
