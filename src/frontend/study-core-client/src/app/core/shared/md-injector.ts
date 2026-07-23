import { Injectable,Injector } from '@angular/core';
import {TruthTable} from '../../modules/truth-table/truth-table';
import { createCustomElement } from '@angular/elements';

@Injectable({
  providedIn: 'root',
})

export class MdInjector {
  constructor(private _injector: Injector) {}

  public setupCustomElements() { // 3. Fixed typo in name
    
    // Create the element
    const mdElement = createCustomElement(TruthTable, { injector: this._injector });
    
    // 2. Register it with the browser (assuming you want the tag to be <md-content>)
    if (!customElements.get('md-content')) {
      customElements.define('md-content', mdElement);
    }
  }
}