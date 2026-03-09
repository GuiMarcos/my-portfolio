import { Component, inject } from '@angular/core';
import { LucideAngularModule, Github, Linkedin, Mail, ArrowDown } from "lucide-angular";
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly router = inject(Router);

  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly ArrowDown = ArrowDown;

  navigateToFragment(fragment: string): void {
    void this.router.navigate([], { fragment });
  }
}
