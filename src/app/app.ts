import { Component, signal } from '@angular/core';
import { Header } from '@components/header/header';
import { Hero } from '@components/hero/hero';
import { About } from '@components/about/about';
import { Portfolio } from "@components/portfolio/portfolio";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('my-portfolio');
}
