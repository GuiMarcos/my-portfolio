import { Github } from 'lucide-angular';

type LucideIcon = typeof Github;

export interface NavLink {
  fragment: string;
  label: string;
}

export interface SocialLink {
  icon: LucideIcon;
  url: string;
  ariaLabel: string;
}
