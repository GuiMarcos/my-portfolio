import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LucideAngularModule, Sun, Moon, Menu } from 'lucide-angular';
import { Router, RouterLink } from '@angular/router';
import { NavigationLink } from '@shared/models/navigation-link.model';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly router = inject(Router);
  protected readonly themeService = inject(ThemeService);

  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly Menu = Menu;

  protected readonly navItems: NavigationLink[] = [
    { fragment: 'about', label: 'Sobre' },
    { fragment: 'portfolio', label: 'Projetos' },
    { fragment: 'skills', label: 'Habilidades' },
    { fragment: 'contact', label: 'Contato' },
  ];

  protected isMenuHidden = signal<boolean>(true);

  protected toggleMenu() {
    this.isMenuHidden.set(!this.isMenuHidden());
  }

  protected hideMenu() {
    this.isMenuHidden.set(true);
  }

  protected isFragmentActive(fragment: string): boolean {
    return this.router.parseUrl(this.router.url).fragment === fragment;
  }
}
