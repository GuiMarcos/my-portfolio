import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillGroup } from '../../shared/models/skills.model';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  readonly sectionTitle = 'Habilidades';
  readonly description =
    'Um panorama das tecnologias, linguagens e ferramentas, como integrações via APIs REST, bancos de dados relacionais e Git , que utilizo no meu dia a dia para dar vida a projetos, atuando em todas as camadas da aplicação.';
  readonly otherTechTitle = 'Outras Tecnologias';

  protected readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend',
      className: 'front',
      items: [
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'CSS/SCSS', level: 90 },
        { name: 'HTML', level: 95 },
      ],
    },
    {
      title: 'Backend',
      className: 'back',
      items: [
        { name: 'Java', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'Node.js', level: 70 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      title: 'Ferramentas',
      className: 'ferramentas',
      items: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Postman', level: 60 },
        { name: 'Figma', level: 65 },
      ],
    },
  ];

  protected readonly otherTechnologies: string[] = [
    'JavaScript',
    'RabbitMQ',
    'REST API',
    'Tailwind CSS',
    'SASS',
    'Bootstrap',
    'PrimeNG',
    'Angular Material',
    'RxJS',
    'GitHub / GitLab',
    'PostgreSQL',
    'MySQL',
    'ESLint',
    'Vitest',
    'Webpack',
    'UI/UX Design',
    'Metodologias Ágeis',
    'Testes Unitários',
    'Acessibilidade (WCAG, ARIA)',
    'Design Responsivo',
    'Prog. Orientada a Objetos',
    'Microserviços',
  ];
}
