import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
})
export class RatingPipe implements PipeTransform {
  transform(rate: number) {
    let contador: string = '';

    for (let index = 0; index < rate; index++) {
      contador += '⭐';
    }

    const decimal = rate % 1;
    if (decimal >= 0.5) {
      contador += 'cosas';
    }

    return contador;
  }
}
