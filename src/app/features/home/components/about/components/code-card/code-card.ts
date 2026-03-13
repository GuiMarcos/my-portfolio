import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CodeSnippet } from '@shared/models/about.model';

@Component({
  selector: 'app-code-card',
  templateUrl: './code-card.html',
  styleUrl: './code-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeCard {
  readonly snippet = input.required<CodeSnippet>();
}
