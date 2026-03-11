import { Mail } from 'lucide-angular';

type LucideIcon = typeof Mail;

export interface ContactItem {
  icon: LucideIcon;
  label: string;
  info: string;
}

export interface FormField {
  id: string;
  label: string;
  type: string;
  name: string;
  autocomplete?: string;
}
