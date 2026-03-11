import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule, Mail, Phone, MapPin, Send } from 'lucide-angular';
import { ContactItem, FormField } from '../../shared/models/contact.model';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  readonly Send = Send;

  readonly sectionTitle = 'Entre em Contato';
  readonly description =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta aperiam placeat, deleniti consequuntur totam magni rem neque quis ullam eius?';

  readonly infosTitle = 'Informações de Contato';

  readonly contactItems: ContactItem[] = [
    { icon: Mail, label: 'Email', info: 'guilherme.amarcos@gmail.com' },
    { icon: Phone, label: 'Telefone', info: '+55 (51) 98240-0703' },
    { icon: MapPin, label: 'Localização', info: 'Paraná, Brasil' },
  ];

  readonly banner = {
    title: 'Disponível para Freelance',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque libero enim praesentium reiciendis error amet rerum a deserunt reprehenderit aperiam.',
  };

  readonly form = {
    title: 'Envie uma Mensagem',
    fields: [
      { id: 'nameInput', label: 'Nome', type: 'text', name: 'name', autocomplete: 'name' },
      { id: 'emailInput', label: 'Email', type: 'email', name: 'email', autocomplete: 'email' },
      { id: 'subjectInput', label: 'Assunto', type: 'text', name: 'subject' },
    ] as FormField[],
    messageLabel: 'Mensagem',
    submitLabel: 'Enviar Mensagem',
  };
}
