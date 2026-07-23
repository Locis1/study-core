import { Injectable, input, numberAttribute } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TruthTableWidget {
   readonly expression = input('A && B');

  readonly variableCount = input(2, {
    transform: numberAttribute,
  });
}
