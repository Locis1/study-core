import { Component, Input } from '@angular/core';
import { MdRenderer } from '../../core/shared/md-renderer/md-renderer';

@Component({
  selector: 'app-truth-table',
  imports: [MdRenderer],
  templateUrl: './truth-table.html',
  styleUrl: './truth-table.css',
})
export class TruthTable {

  @Input() expression = '';
  @Input() variableCount = 2;

}
