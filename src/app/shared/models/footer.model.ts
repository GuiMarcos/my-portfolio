import { Github } from 'lucide-angular';

type LucideIcon = typeof Github;

export interface SocialLink {
  icon: LucideIcon;
  url: string;
  ariaLabel: string;
}
