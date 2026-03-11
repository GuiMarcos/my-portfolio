import { ChevronsLeftRight } from 'lucide-angular';

type LucideIcon = typeof ChevronsLeftRight;

export interface AboutCard {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface AboutStat {
  label: string;
  value: string;
}
