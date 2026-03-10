import { Component, inject, signal } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Header } from '@components/header/header';
import { Hero } from '@components/hero/hero';
import { About } from '@components/about/about';
import { Portfolio } from "@components/portfolio/portfolio";
import { Skills } from "@components/skills/skills";
import { Contact } from "@components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Portfolio, Skills, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly viewportScroller = inject(ViewportScroller);

  protected readonly title = signal('my-portfolio');

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
