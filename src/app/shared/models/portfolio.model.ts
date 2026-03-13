export interface Project {
  title: string;
  description: string;
  previewUrl: string;
  techs: string[];
  repositoryName: string;
  language: string | null;
  liveUrl: string;
}

export interface SwiperInstance {
  isBeginning: boolean;
  isEnd: boolean;
  slidePrev(): void;
  slideNext(): void;
  destroy(deleteInstance: boolean, cleanStyles: boolean): void;
}

export interface SwiperHostElement extends HTMLElement {
  swiper?: SwiperInstance;
  initialize(): void;
}
