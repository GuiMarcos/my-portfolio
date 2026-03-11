import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Github, Linkedin, Mail } from 'lucide-angular';

interface NavLink {
  fragment: string;
  label: string;
}

interface ServiceItem {
  label: string;
}

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;

  readonly currentYear = new Date().getFullYear();

  protected readonly navLinks: NavLink[] = [
    { fragment: 'home', label: 'Início' },
    { fragment: 'about', label: 'Sobre Mim' },
    { fragment: 'portfolio', label: 'Projetos' },
    { fragment: 'skills', label: 'Habilidades' },
  ];

  protected readonly services: ServiceItem[] = [
    { label: 'Desenvolvimento Web' },
    { label: 'UI/UX Design' },
    { label: 'Consultoria' },
    { label: 'Freelance' },
  ];
}
