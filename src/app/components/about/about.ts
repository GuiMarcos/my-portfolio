import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule, ChevronsLeftRight, Lightbulb, Zap } from 'lucide-angular';
import { AboutCard, AboutStat } from '../../shared/models/about.model';

interface CodeToken {
  text: string;
  cssClass?: string;
};

interface CodeLine {
  number: string;
  indent?: boolean;
  gapBefore?: boolean;
  parts: CodeToken[];
};

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly sectionTitle = 'Sobre Mim';
  readonly description =
    'Desenvolvedor full stack apaixonado por criar soluções de qualidade. Tenho experiência em modernização de sistemas, desenvolvimento de aplicações web escaláveis e entrega de valor real aos usuários. Meu foco é sempre na usabilidade, performance e boas práticas de engenharia.';
  protected readonly cards: AboutCard[] = [
    {
      icon: ChevronsLeftRight,
      title: 'Desenvolvimento',
      text: 'Construção de aplicações web e desktop completas, atuando em frontend, backend e infraestrutura. Especializado em criar soluções escaláveis e mantíveis.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      text: 'Aplicação de conceitos modernos de design e desenvolvimento, criando interfaces acessíveis, responsivas e com foco na experiência do usuário final.',
    },
    {
      icon: Zap,
      title: 'Performance',
      text: 'Otimização rigorosa de sistemas e código, sempre buscando melhorar métricas de desempenho e oferecer aplicações rápidas e responsivas aos usuários.',
    },
  ];

  readonly journey = {
    subtitle: 'Minha Jornada',
    text: 'Uma trajetória de aprendizado constante, enfrentando desafios cada vez maiores e desenvolvendo habilidades em diferentes áreas do desenvolvimento. Cada projeto me ensinou algo valioso sobre a importância de código limpo, arquitetura sólida e impacto para o usuário.',
    stats: [
      { label: 'Projetos', value: '10+' },
      { label: 'Experiência', value: '2 anos' },
    ] as AboutStat[],
  };

  readonly codeSnippet: { fileName: string; lines: CodeLine[] } = {
    fileName: 'Portfolio.ts',
    lines: [
      {
        number: '01',
        parts: [
          { text: 'const', cssClass: 'keyword' },
          { text: ' ' },
          { text: 'developer', cssClass: 'token' },
          { text: ' = {' },
        ],
      },
      {
        number: '02',
        indent: true,
        parts: [
          { text: 'name:', cssClass: 'property' },
          { text: ' ' },
          { text: "'Guilherme Marcos',", cssClass: 'string' },
        ],
      },
      {
        number: '03',
        indent: true,
        parts: [
          { text: 'focus:', cssClass: 'property' },
          { text: ' ' },
          { text: "'Fullstack Development',", cssClass: 'string' },
        ],
      },
      {
        number: '04',
        indent: true,
        parts: [
          { text: 'skills:', cssClass: 'property' },
          { text: ' [' },
          { text: "'Angular'", cssClass: 'string' },
          { text: ', ' },
          { text: "'Sass'", cssClass: 'string' },
          { text: ', ' },
          { text: "'JS'", cssClass: 'string' },
          { text: '],' },
        ],
      },
      {
        number: '05',
        indent: true,
        parts: [
          { text: 'passionate:', cssClass: 'property' },
          { text: ' ' },
          { text: 'true', cssClass: 'boolean' },
          { text: ',' },
        ],
      },
      {
        number: '06',
        indent: true,
        parts: [
          { text: 'motto:', cssClass: 'property' },
          { text: ' ' },
          { text: '"Construir com proposito"', cssClass: 'string' },
        ],
      },
      {
        number: '07',
        parts: [{ text: '};' }],
      },
      {
        number: '08',
        gapBefore: true,
        parts: [
          { text: 'developer', cssClass: 'token' },
          { text: '.' },
          { text: 'showcase', cssClass: 'method' },
          { text: '();' },
        ],
      },
    ],
  };
}
