import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CodeSnippet } from '../../models/code-snippet.model';

@Component({
  selector: 'app-code-card',
  templateUrl: './code-card.html',
  styleUrl: './code-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeCard {
  readonly snippet = input.required<CodeSnippet>();
}
