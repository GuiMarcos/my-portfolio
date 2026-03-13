import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  inject,
  viewChildren,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

interface JourneyStep {
  period: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly journeyTimelineElement = viewChild<ElementRef<HTMLElement>>('journeyTimelineElement');
  private readonly journeyStepElements = viewChildren<ElementRef<HTMLElement>>('journeyStepElement');
  private animationContext?: gsap.Context;

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

  protected readonly journeySteps: JourneyStep[] = [
    {
      period: 'Inicio',
      title: 'Base em logica e desenvolvimento web',
      description: 'Comecei estruturando fundamentos de programacao, interfaces responsivas e organizacao de codigo para entregar projetos consistentes.',
    },
    {
      period: 'Evolucao',
      title: 'Aplicacoes completas e arquitetura',
      description: 'Passei a construir fluxos full stack, conectando frontend, backend e banco de dados com foco em manutencao e escalabilidade.',
    },
    {
      period: 'Refino',
      title: 'Performance e experiencia do usuario',
      description: 'Aprofundei otimização, acessibilidade e qualidade visual para tornar cada produto mais rapido, claro e agradavel de usar.',
    },
    {
      period: 'Agora',
      title: 'Entrega orientada a impacto',
      description: 'Hoje concentro meu trabalho em criar solucoes modernas que equilibram design, performance e valor real para quem usa.',
    },
  ];

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

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const timelineElement = this.journeyTimelineElement()?.nativeElement;
    const elements = this.journeyStepElements().map((element) => element.nativeElement);

    if (!timelineElement || elements.length === 0) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    this.animationContext = gsap.context(() => {
      const progressElement = timelineElement.querySelector<HTMLElement>('.timeline-progress');
      if (progressElement) {
        gsap.set(progressElement, { scaleY: 0, transformOrigin: 'top center' });

        gsap.to(progressElement, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineElement,
            start: 'top 78%',
            end: 'bottom 42%',
            scrub: true,
          },
        });
      }

      gsap.set(elements, {
        opacity: 0,
        y: 34,
      });

      for (const element of elements) {
        const node = element.querySelector<HTMLElement>('.timeline-node');

        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        });

        if (node) {
          gsap.fromTo(
            node,
            {
              scale: 0.7,
              backgroundColor: 'rgba(255, 255, 255, 0.38)',
              boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)',
            },
            {
              scale: 1,
              backgroundColor: '#1f1f1f',
              boxShadow: '0 0 0 8px rgba(255, 255, 255, 0.12)',
              duration: 0.55,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 82%',
                toggleActions: 'play none none reverse',
              },
            },
          );
        }
      }
    }, timelineElement);
  }

  ngOnDestroy(): void {
    this.animationContext?.revert();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
}
