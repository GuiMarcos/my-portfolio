import { Component } from '@angular/core';

interface SkillItem {
  name: string;
  level: number;
}

interface SkillGroup {
  title: string;
  className: string;
  items: SkillItem[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
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
        { name: 'Figma', level: 65 }
      ],
    },
  ];

  protected readonly otherTechnologies: string[] = [
    'JavaScript',
    'REST API',
    'Tailwind CSS',
    'Bootstrap',
    'Angular Material',
    'PrimeNG',
    'GitHub',
    'GitLab',
    'RxJS',
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
  ];
}
