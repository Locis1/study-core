import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendStatus } from './core/shared/backend-status/backend-status';
import { TruthTable } from './modules/truth-table/truth-table';
import { MdInjector } from './core/shared/md-injector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackendStatus, TruthTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('study-core-client');
  constructor(private mdInjector: MdInjector) {}

  ngOnInit() {
    this.mdInjector.setupCustomElements();
  }
}
