import { Component, signal } from '@angular/core';
import { LucideAngularModule, Sun, Menu } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly Sun = Sun;
  readonly Menu = Menu;

  protected isMenuHidden = signal<boolean>(true);

  protected toggleMenu() {
    this.isMenuHidden.set(!this.isMenuHidden())
  }
}
