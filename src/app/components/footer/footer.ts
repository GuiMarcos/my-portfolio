import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Github, Linkedin, Mail } from 'lucide-angular';
import { SocialLink } from '../../shared/models/footer.model';
import { NavigationLink } from '../../shared/models/navigation-link.model';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly currentYear = new Date().getFullYear();

  readonly brand = {
    name: 'Guilherme Marcos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  };

  readonly linksTitle = 'Links Rápidos';
  readonly servicesTitle = 'Serviços';
  readonly copyrightSuffix = 'Feito em Angular';

  readonly socialLinks: SocialLink[] = [
    { icon: Github, url: 'https://github.com', ariaLabel: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com', ariaLabel: 'LinkedIn' },
    { icon: Mail, url: 'mailto:contato@exemplo.com', ariaLabel: 'Email' },
  ];

  protected readonly navLinks: NavigationLink[] = [
    { fragment: 'home', label: 'Início' },
    { fragment: 'about', label: 'Sobre Mim' },
    { fragment: 'portfolio', label: 'Projetos' },
    { fragment: 'skills', label: 'Habilidades' },
  ];

  protected readonly services: string[] = [
    'Desenvolvimento Web',
    'UI/UX Design',
    'Consultoria',
    'Freelance',
  ];
}
