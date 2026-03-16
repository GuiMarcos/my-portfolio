import { Mail } from 'lucide-angular';

type LucideIcon = typeof Mail;

export interface ContactItem {
  icon: LucideIcon;
  label: string;
  info: string;
}

export type ContactFormFieldName = 'name' | 'email' | 'subject';

export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
}

export interface FormField {
  id: string;
  label: string;
  type: string;
  name: ContactFormFieldName;
  autocomplete?: string;
}
