import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Timeline } from '../timeline/timeline';
import { CodeCard } from '../code-card/code-card';
import { AboutStat, CodeSnippet, JourneyStep } from '@shared/models/about.model';

@Component({
  selector: 'app-journey-banner',
  imports: [Timeline, CodeCard],
  templateUrl: './journey-banner.html',
  styleUrl: './journey-banner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneyBanner {
  protected readonly subtitle = 'Minha Jornada';
  protected readonly text =
    'Minha trajetória combina base acadêmica sólida em Engenharia da Computação com experiência prática em sistemas reais. Ao longo desse caminho, desenvolvi aplicações desktop, web e mobile, aprofundei fundamentos de banco de dados e arquitetura e passei a atuar em produtos com foco em performance, experiência do usuário e entrega de valor.';
  protected readonly stats: AboutStat[] = [
    { label: 'Foco de atuação', value: 'Performance e experiência' },
    { label: 'Contexto de projetos', value: 'ERP e sistemas de grande porte' },
  ];
  protected readonly journeySteps: JourneyStep[] = [
    {
      period: 'Formação',
      title: 'Engenharia da Computação na UTFPR',
      description:
        'Na graduação em Engenharia da Computação, consolidei fundamentos de algoritmos, estruturas de dados, orientação a objetos, banco de dados e desenvolvimento de software, construindo a base técnica que sustenta meu trabalho full stack.',
    },
    {
      period: 'Projetos acadêmicos',
      title: 'Java, SQL e aplicações estruturadas',
      description:
        'Desenvolvi projetos em Java desktop, incluindo um totem de autoatendimento com JDBC e operações CRUD em banco relacional, além de um sistema de processamento SQL sobre arquivos CSV com foco em modelagem, camadas e clareza da lógica de negócio.',
    },
    {
      period: 'Estágio · UTFPR',
      title: 'Modernização de sistemas institucionais com Angular',
      description:
        'Atuei na UTFPR na evolução de sistemas com cerca de 30 mil usuários, modernizando aplicações legadas com Angular, Svelte e Node.js, integrando APIs REST e formulários reativos e realizando ajustes em banco de dados com PL/SQL. Também conduzi melhorias de performance que elevaram aplicações de 36 para 94 no Lighthouse.',
    },
    {
      period: 'Abril/2026 – Presente',
      title: 'Estágio em Desenvolvimento de Software · FKN Informática',
      description:
        'Atuo no desenvolvimento de um sistema de gestão de serviços integrado a um ERP corporativo, com interfaces administrativas em React, aplicativos em React Native e funcionalidades e integrações em Django. Otimizei consultas ao banco, refatorei módulos críticos de mais de 3.000 para cerca de 800 linhas por meio de componentização e melhorei LCP e FCP. Também desenvolvi integrações REST com ERPs externos, rotinas assíncronas com Celery e Redis e funcionalidades offline-first no app mobile.',
    },
  ];

  protected readonly codeSnippet: CodeSnippet = {
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
          { text: "'React'", cssClass: 'string' },
          { text: ', ' },
          { text: "'Angular'", cssClass: 'string' },
          { text: ', ' },
          { text: "'Django'", cssClass: 'string' },
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
          { text: '"Construir com propósito"', cssClass: 'string' },
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
