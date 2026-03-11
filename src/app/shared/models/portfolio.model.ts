export interface Project {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  techs: string[];
  liveUrl?: string;
  repoUrl?: string;
}
