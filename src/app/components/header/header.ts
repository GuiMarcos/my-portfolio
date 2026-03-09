import { Component, inject, signal } from '@angular/core';
import { LucideAngularModule, Sun, Menu } from 'lucide-angular';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly router = inject(Router);

  readonly Sun = Sun;
  readonly Menu = Menu;

  protected isMenuHidden = signal<boolean>(true);

  protected toggleMenu() {
    this.isMenuHidden.set(!this.isMenuHidden())
  }

  protected isFragmentActive(fragment: string): boolean {
    return this.router.parseUrl(this.router.url).fragment === fragment;
  }
}
