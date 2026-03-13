import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnDestroy,
    PLATFORM_ID,
    inject,
    input,
    viewChild,
    viewChildren,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { JourneyStep } from '@shared/models/about.model';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.html',
    styleUrl: './timeline.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline implements AfterViewInit, OnDestroy {
    readonly steps = input.required<JourneyStep[]>();

    private readonly platformId = inject(PLATFORM_ID);
    private readonly timelineContainer = viewChild<ElementRef<HTMLElement>>('timelineContainer');
    private readonly stepElements = viewChildren<ElementRef<HTMLElement>>('stepElement');
    private animationContext?: { revert(): void };
    private destroyed = false;

    ngAfterViewInit(): void {
        if (!isPlatformBrowser(this.platformId)) return;
        void this.initializeAnimations();
    }

    ngOnDestroy(): void {
        this.destroyed = true;
        this.animationContext?.revert();
    }

    private async initializeAnimations(): Promise<void> {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger'),
        ]);

        if (this.destroyed) return;

        const container = this.timelineContainer()?.nativeElement;
        const elements = this.stepElements().map((el) => el.nativeElement);

        if (!container || elements.length === 0) return;

        gsap.registerPlugin(ScrollTrigger);

        this.animationContext = gsap.context(() => {
            const progressEl = container.querySelector<HTMLElement>('.timeline-progress');
            if (progressEl) {
                gsap.set(progressEl, { scaleY: 0, transformOrigin: 'top center' });
                gsap.to(progressEl, {
                    scaleY: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 78%',
                        end: 'bottom 42%',
                        scrub: true,
                    },
                });
            }

            gsap.set(elements, { opacity: 0, y: 34 });

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
        }, container);
    }
}
