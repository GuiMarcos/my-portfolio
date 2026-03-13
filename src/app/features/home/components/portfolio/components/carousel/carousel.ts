import {
    AfterViewInit,
    CUSTOM_ELEMENTS_SCHEMA,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnDestroy,
    input,
    signal,
    viewChild,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Project } from '@shared/models/portfolio.model';

interface SwiperInstance {
    isBeginning: boolean;
    isEnd: boolean;
    slidePrev(): void;
    slideNext(): void;
    destroy(deleteInstance: boolean, cleanStyles: boolean): void;
}

interface SwiperHostElement extends HTMLElement {
    swiper?: SwiperInstance;
    initialize(): void;
}

register();

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.html',
    styleUrl: './carousel.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Carousel implements AfterViewInit, OnDestroy {
    readonly projects = input.required<Project[]>();

    private readonly fallbackPreviewUrl =
        'https://placehold.co/800x500/424144/f5f5f5?text=Preview+indisponivel';
    private readonly swiperRef = viewChild<ElementRef<HTMLElement>>('swiperRef');

    protected readonly canGoPrev = signal(false);
    protected readonly canGoNext = signal(false);

    ngAfterViewInit(): void {
        const swiperEl = this.getSwiperElement();
        if (!swiperEl) return;

        Object.assign(swiperEl, {
            slidesPerView: 1.12,
            spaceBetween: 18,
            centeredSlides: false,
            grabCursor: true,
            initialSlide: 0,
            breakpoints: {
                800: { slidesPerView: 2.15, spaceBetween: 22 },
                1200: { slidesPerView: 3.25, spaceBetween: 26 },
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
        const swiperEl = this.getSwiperElement();
        swiperEl?.swiper?.destroy(true, true);
    }

    protected slidePrev(): void {
        const swiperEl = this.getSwiperElement();
        swiperEl?.swiper?.slidePrev();
    }

    protected slideNext(): void {
        const swiperEl = this.getSwiperElement();
        swiperEl?.swiper?.slideNext();
    }

    protected onImageError(event: Event): void {
        const img = event.target as HTMLImageElement;
        if (img.src === this.fallbackPreviewUrl) return;
        img.src = this.fallbackPreviewUrl;
        img.classList.add('is-fallback');
    }

    private syncControls(): void {
        const swiperEl = this.getSwiperElement();
        const swiper = swiperEl?.swiper;
        if (!swiper) return;
        this.canGoPrev.set(!swiper.isBeginning);
        this.canGoNext.set(!swiper.isEnd);
    }

    private getSwiperElement(): SwiperHostElement | undefined {
        const element = this.swiperRef()?.nativeElement;
        return element as unknown as SwiperHostElement | undefined;
    }
}
