import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LucideAngularModule, Github, Linkedin, Mail, ArrowDown, MessageCircle } from 'lucide-angular';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { githubUsername, profileLinks, profileUrls } from '@shared/config/profile-links';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  private readonly router = inject(Router);

  readonly ArrowDown = ArrowDown;

  readonly content = {
    photo: { src: `https://github.com/${githubUsername}.png?size=800`, alt: 'Foto de Guilherme' },
    greeting: 'Olá, eu sou',
    name: 'Guilherme Marcos',
    jobTitle: 'Desenvolvedor Full Stack',
    description:
      'Transformando ideias em soluções digitais escaláveis. Desenvolvedor full stack dedicado a criar experiências de usuário impactantes, unindo código limpo, boas práticas de arquitetura e design centrado no usuário para entregar valor real.',
    buttons: {
      projects: 'Ver Projetos',
      contact: 'Entre em Contato',
    },
    socialLinks: [
      { icon: Github, url: profileLinks.github, ariaLabel: 'GitHub' },
      { icon: Linkedin, url: profileLinks.linkedin, ariaLabel: 'LinkedIn' },
      { icon: Mail, url: profileUrls.mailto, ariaLabel: 'Email' },
      { icon: MessageCircle, url: profileUrls.whatsapp, ariaLabel: 'Whatsapp' },
    ]
  };

  navigateToFragment(fragment: string): void {
    void this.router.navigate([], { fragment });
  }
}
