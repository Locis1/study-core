import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendStatus } from './core/shared/backend-status/backend-status';
import { TruthTable } from './modules/truth-table/truth-table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackendStatus, TruthTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('study-core-client');

  
}
