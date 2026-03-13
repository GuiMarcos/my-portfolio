import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Timeline } from '../timeline/timeline';
import { AboutStat, JourneyStep } from '@shared/models/about.model';

interface CodeToken {
    text: string;
    cssClass?: string;
}

interface CodeLine {
    number: string;
    indent?: boolean;
    gapBefore?: boolean;
    parts: CodeToken[];
}

@Component({
    selector: 'app-journey-banner',
    imports: [Timeline],
    templateUrl: './journey-banner.html',
    styleUrl: './journey-banner.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneyBanner {
    protected readonly subtitle = 'Minha Jornada';
    protected readonly text =
        'Uma trajetória de aprendizado constante, enfrentando desafios cada vez maiores e desenvolvendo habilidades em diferentes áreas do desenvolvimento. Cada projeto me ensinou algo valioso sobre a importância de código limpo, arquitetura sólida e impacto para o usuário.';
    protected readonly stats: AboutStat[] = [
        { label: 'Projetos', value: '10+' },
        { label: 'Experiência', value: '2 anos' },
    ];
    protected readonly journeySteps: JourneyStep[] = [
        {
            period: 'Inicio',
            title: 'Base em logica e desenvolvimento web',
            description:
                'Comecei estruturando fundamentos de programacao, interfaces responsivas e organizacao de codigo para entregar projetos consistentes.',
        },
        {
            period: 'Evolucao',
            title: 'Aplicacoes completas e arquitetura',
            description:
                'Passei a construir fluxos full stack, conectando frontend, backend e banco de dados com foco em manutencao e escalabilidade.',
        },
        {
            period: 'Refino',
            title: 'Performance e experiencia do usuario',
            description:
                'Aprofundei otimização, acessibilidade e qualidade visual para tornar cada produto mais rapido, claro e agradavel de usar.',
        },
        {
            period: 'Agora',
            title: 'Entrega orientada a impacto',
            description:
                'Hoje concentro meu trabalho em criar solucoes modernas que equilibram design, performance e valor real para quem usa.',
        },
    ];

    protected readonly codeSnippet: { fileName: string; lines: CodeLine[] } = {
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
