import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LucideAngularModule, Github, Linkedin, Mail, ArrowDown } from 'lucide-angular';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  private readonly router = inject(Router);

  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly ArrowDown = ArrowDown;

  readonly content = {
    photo: { src: 'https://github.com/GuiMarcos.png?size=800', alt: 'Foto de Guilherme' },
    greeting: 'Olá, eu sou',
    name: 'Guilherme Marcos',
    jobTitle: 'Desenvolvedor Full Stack',
    description:
      'Transformando ideias em soluções digitais escaláveis. Desenvolvedor full stack dedicado a criar experiências de usuário impactantes, unindo código limpo, boas práticas de arquitetura e design centrado no usuário para entregar valor real.',
    buttons: {
      projects: 'Ver Projetos',
      contact: 'Entre em Contato',
    },
    links: {
      github: 'http://',
      linkedin: 'http://',
      email: 'http://',
    },
  };

  navigateToFragment(fragment: string): void {
    void this.router.navigate([], { fragment });
  }
}
