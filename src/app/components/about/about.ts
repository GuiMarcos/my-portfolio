import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LucideAngularModule, ChevronsLeftRight, Lightbulb, Zap } from 'lucide-angular';
import { AboutCard, AboutStat } from '../../shared/models/about.model';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly sectionTitle = 'Sobre Mim';
  readonly description =
    'Sou estudante de Engenharia da Computação na UTFPR e atuo na modernização e sustentação de sistemas de grande escala. Minha paixão é unir o desenvolvimento front-end e back-end para construir aplicações robustas , focando sempre na usabilidade, estabilidade operacional e na entrega de valor real para as pessoas.'
  protected readonly cards: AboutCard[] = [
    {
      icon: ChevronsLeftRight,
      title: 'Desenvolvimento',
      text: ': Construção de aplicações web e desktop completas utilizando tecnologias modernas como JavaScript, Angular, Svelte, Node.js e Java',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      text: 'Aplicação de conceitos de UI/UX, estruturação modular e design responsivo para criar interfaces modernas, escaláveis e com foco em acessibilidade (WCAG).',
    },
    {
      icon: Zap,
      title: 'Perfomance',
      text: 'Otimização rigorosa de sistemas, com histórico de resolução de gargalos críticos e elevação de métricas de desempenho (como o salto no Lighthouse de 36 para 94).',
    },
  ];

  readonly journey = {
    subtitle: 'Minha Jornada',
    text: 'De projetos acadêmicos estruturados e templates freelancers à modernização de sistemas institucionais para dezenas de milhares de usuários. Descubra como minha trajetória técnica desenvolveu minha visão de produto e foco na resolução de problemas',
    stats: [
      { label: 'Projetos', value: '10+' },
      { label: 'Experiência', value: '2 anos' },
    ] as AboutStat[],
    image: { src: 'https://placehold.co/800x800', alt: 'Foto relacionado a Jornada' },
  };
}
