import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule, ChevronsLeftRight, Lightbulb, Zap } from 'lucide-angular';
import { JourneyBanner } from './components/journey-banner/journey-banner';
import { AboutCard } from '@shared/models/about.model';

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule, JourneyBanner],
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
}
