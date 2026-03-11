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
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, voluptas! Tenetur quas, laboriosam velit adipisci, facilis iure culpa dolore excepturi laudantium suscipit quaerat, odit minus? Mollitia quos quibusdam quisquam enim?';

  protected readonly cards: AboutCard[] = [
    {
      icon: ChevronsLeftRight,
      title: 'Desenvolvimento',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis voluptatibus veniam magnam pariatur libero omnis dignissimos amet mollitia obcaecati? Molestias!',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis voluptatibus veniam magnam pariatur libero omnis dignissimos amet mollitia obcaecati? Molestias!',
    },
    {
      icon: Zap,
      title: 'Perfomance',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis voluptatibus veniam magnam pariatur libero omnis dignissimos amet mollitia obcaecati? Molestias!',
    },
  ];

  readonly journey = {
    subtitle: 'Minha Jornada',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ullam vel impedit, cum esse vero, ex incidunt officiis assumenda natus temporibus a accusantium quo pariatur placeat aliquid? Dignissimos veniam, laudantium sunt enim odio ab necessitatibus deserunt culpa reprehenderit? Dolor rem sed maiores magni odio earum quas nemo nostrum eum non?',
    stats: [
      { label: 'Projetos', value: '10+' },
      { label: 'Experiência', value: '2 anos' },
    ] as AboutStat[],
    image: { src: 'https://placehold.co/800x800', alt: 'Foto relacionado a Jornada' },
  };
}
