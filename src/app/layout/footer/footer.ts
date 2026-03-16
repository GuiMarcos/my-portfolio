import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Github, Linkedin, Mail } from 'lucide-angular';
import { profileLinks, profileUrls } from '@shared/config/profile-links';
import { SocialLink } from '@shared/models/footer.model';
import { NavigationLink } from '@shared/models/navigation-link.model';

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
      'Construindo experiências digitais com código, visão sistêmica e alta performance.',
  };

  readonly linksTitle = 'Links Rápidos';
  readonly servicesTitle = 'Serviços';
  readonly copyrightSuffix = 'Feito em Angular';

  readonly socialLinks: SocialLink[] = [
    { icon: Github, url: profileLinks.github, ariaLabel: 'GitHub' },
    { icon: Linkedin, url: profileLinks.linkedin, ariaLabel: 'LinkedIn' },
    { icon: Mail, url: profileUrls.mailto, ariaLabel: 'Email' },
  ];

  protected readonly navLinks: NavigationLink[] = [
    { fragment: 'home', label: 'Início' },
    { fragment: 'about', label: 'Sobre Mim' },
    { fragment: 'portfolio', label: 'Projetos' },
    { fragment: 'skills', label: 'Habilidades' },
  ];

  protected readonly services: string[] = [
    'Desenvolvimento Frontend',
    'Desenvolvimento Backend',
    'UI/UX Design',
    'Freelance',
  ];
}
