import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Hero } from '@components/hero/hero';
import { About } from '@components/about/about';
import { Portfolio } from '@components/portfolio/portfolio';
import { Skills } from '@components/skills/skills';
import { Contact } from '@components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Portfolio, Skills, Contact],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-portfolio></app-portfolio>
    <app-skills></app-skills>
    <app-contact></app-contact>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly document = inject(DOCUMENT);
  private readonly viewportScroller = inject(ViewportScroller);

  constructor() {
    this.viewportScroller.setOffset(() => [0, this.getHeaderOffset()]);
  }

  private getHeaderOffset(): number {
    const headerElement = this.document.querySelector('app-header header') as HTMLElement | null;
    if (headerElement) {
      return Math.ceil(headerElement.getBoundingClientRect().height);
    }
    const bodyPaddingTop = getComputedStyle(this.document.body).paddingTop;
    const fallbackOffset = Number.parseFloat(bodyPaddingTop);
    return Number.isFinite(fallbackOffset) ? fallbackOffset : 0;
  }
}
