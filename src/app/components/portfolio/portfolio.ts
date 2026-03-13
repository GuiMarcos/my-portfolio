import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Project } from '../../shared/models/portfolio.model';
import { GitHubService } from '../../core/services/github.service';

register();

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Portfolio implements AfterViewInit, OnDestroy {
  private readonly githubService = inject(GitHubService);
  private readonly fallbackPreviewUrl = 'https://placehold.co/800x500/424144/f5f5f5?text=Preview+indisponivel';
  private readonly carouselProjectsLimit = 10;

  @ViewChild('swiperRef') private swiperRef?: ElementRef<HTMLElement>;

  protected readonly canGoPrev = signal(false);
  protected readonly canGoNext = signal(false);

  readonly sectionTitle = 'Meus Projetos';
  readonly description =
    'Uma curadoria dos meus melhores trabalhos, refletindo minha expertise em desenvolvimento full stack, design responsivo e soluções escaláveis. Cada projeto representa desafios superados e aprendizados aplicados na prática.';
  readonly allProjectsLabel = 'Ver todos os projetos';

  // Estes 3 ficam em destaque no inicio. O restante e completado automaticamente.
  private readonly featuredRepoNames = ['StarbuckProj', 'CarSalesProj', 'ProjetoAnaliseDeSistemas'];

  protected readonly projects = computed<Project[]>(() => {
    const featuredRepos = this.githubService.getRepositoriesByNames(this.featuredRepoNames);
    const featuredSet = new Set(featuredRepos.map((repo) => repo.name));
    const extraRepos = this.githubService
      .getAllRepositories()
      .filter((repo) => !featuredSet.has(repo.name))
      .slice(0, this.carouselProjectsLimit);

    return [...featuredRepos, ...extraRepos]
      .slice(0, this.carouselProjectsLimit)
      .map(
        (repo) =>
          ({
            title: repo.name,
            description: repo.description || 'Sem descrição',
            previewUrl: this.githubService.getPreviewImageUrl(repo.name, repo.default_branch),
            techs: repo.topics.length > 0 ? repo.topics : repo.language ? [repo.language] : [],
            repositoryName: repo.name,
            language: repo.language,
            liveUrl: repo.html_url,
          }) as Project,
      );
  });

  ngAfterViewInit(): void {
    const swiperEl = this.swiperRef?.nativeElement as any;
    if (!swiperEl) return;

    Object.assign(swiperEl, {
      slidesPerView: 1.12,
      spaceBetween: 18,
      centeredSlides: false,
      grabCursor: true,
      initialSlide: 0,
      breakpoints: {
        800: {
          slidesPerView: 2.15,
          spaceBetween: 22,
        },
        1200: {
          slidesPerView: 3.25,
          spaceBetween: 26,
        },
      },
      on: {
        init: () => this.syncControls(),
        slideChange: () => this.syncControls(),
        resize: () => this.syncControls(),
      },
    });

    swiperEl.initialize();
    this.syncControls();
  }

  ngOnDestroy(): void {
    const swiperEl = this.swiperRef?.nativeElement as any;
    swiperEl?.swiper?.destroy(true, true);
  }

  protected slidePrev(): void {
    const swiperEl = this.swiperRef?.nativeElement as any;
    swiperEl?.swiper?.slidePrev();
  }

  protected slideNext(): void {
    const swiperEl = this.swiperRef?.nativeElement as any;
    swiperEl?.swiper?.slideNext();
  }

  protected onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img.src === this.fallbackPreviewUrl) return;
    img.src = this.fallbackPreviewUrl;
    img.classList.add('is-fallback');
  }

  private syncControls(): void {
    const swiperEl = this.swiperRef?.nativeElement as any;
    const swiper = swiperEl?.swiper;
    if (!swiper) return;
    this.canGoPrev.set(!swiper.isBeginning);
    this.canGoNext.set(!swiper.isEnd);
  }
}
