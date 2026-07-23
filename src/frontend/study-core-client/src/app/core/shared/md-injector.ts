import { Injectable, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TruthTableWidget } from './truth-table-widget';

@Injectable({
  providedIn: 'root',
})
export class MdInjector {
  constructor(private readonly injector: Injector) {}

  setupCustomElements(): void {
    const tagName = 'truth-table-widget';

    if (customElements.get(tagName)) {
      return;
    }

    const element = createCustomElement(TruthTableWidget, {
      injector: this.injector,
    });

    customElements.define(tagName, element);
  }
}