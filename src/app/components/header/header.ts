import { Component, inject, signal } from '@angular/core';
import { LucideAngularModule, Sun, Menu } from 'lucide-angular';
import { Router, RouterLink } from '@angular/router';

interface NavItem {
  fragment: string;
  label: string;
};

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

  protected readonly navItems: NavItem[] = [
    { fragment: 'about', label: 'Sobre' },
    { fragment: 'portfolio', label: 'Projetos' },
    { fragment: 'skills', label: 'Habilidades' },
    { fragment: 'contact', label: 'Contato' },
  ];

  protected isMenuHidden = signal<boolean>(true);

  protected toggleMenu() {
    this.isMenuHidden.set(!this.isMenuHidden())
  }

  protected hideMenu() {
    this.isMenuHidden.set(true);
  }

  protected isFragmentActive(fragment: string): boolean {
    return this.router.parseUrl(this.router.url).fragment === fragment;
  }
}
