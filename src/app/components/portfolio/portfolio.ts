import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Project } from '../../shared/models/portfolio.model';

@Component({
  selector: 'app-portfolio',
  imports: [NgOptimizedImage],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  readonly sectionTitle = 'Meus Projetos';
  readonly description =
    'Uma curadoria dos meus melhores trabalhos, refletindo minha expertise em desenvolvimento full stack, design responsivo e soluções escaláveis. Cada projeto representa desafios superados e aprendizados aplicados na prática.';
  readonly allProjectsLabel = 'Ver todos os projetos';

  protected readonly projects: Project[] = [
    {
      title: 'Projeto 1',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ea ratione corporis enim cupiditate iste, fugit inventore minus nisi exercitationem?',
      image: {
        src: 'https://placehold.co/600x400',
        alt: 'Foto do Projeto 1',
        width: 600,
        height: 400,
      },
      techs: ['React', 'TypeScript', 'Node.js'],
      liveUrl: '',
      repoUrl: '',
    },
    {
      title: 'Projeto 2',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ea ratione corporis enim cupiditate iste, fugit inventore minus nisi exercitationem?',
      image: {
        src: 'https://placehold.co/600x400',
        alt: 'Foto do Projeto 2',
        width: 600,
        height: 400,
      },
      techs: ['Angular', 'TypeScript', 'SCSS'],
      liveUrl: '',
      repoUrl: '',
    },
    {
      title: 'Projeto 3',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ea ratione corporis enim cupiditate iste, fugit inventore minus nisi exercitationem?',
      image: {
        src: 'https://placehold.co/600x400',
        alt: 'Foto do Projeto 3',
        width: 600,
        height: 400,
      },
      techs: ['Java', 'Spring Boot', 'PostgreSQL'],
      liveUrl: '',
      repoUrl: '',
    },
  ];
}
