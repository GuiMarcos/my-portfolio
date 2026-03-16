import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule, Mail, Phone, MapPin, Send } from 'lucide-angular';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '@core/services/contact.service';
import { ContactFormFieldName, ContactFormPayload, ContactItem, FormField } from '@shared/models/contact.model';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly formBuilder = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly toastr = inject(ToastrService);

  readonly Send = Send;
  readonly submitted = signal(false);

  readonly sectionTitle = 'Entre em Contato';
  readonly description =
    'Tenho interesse em novos desafios e colaborações. Sinta-se à vontade para me contatar em relação a oportunidades de trabalho, projetos conjuntos ou simplesmente para trocar ideias sobre tecnologia.';
  readonly infosTitle = 'Informações de Contato';

  readonly contactItems: ContactItem[] = [
    { icon: Mail, label: 'Email', info: 'guilherme.amarcos@gmail.com' },
    { icon: Phone, label: 'Telefone', info: '+55 (51) 98240-0703' },
    { icon: MapPin, label: 'Localização', info: 'Paraná, Brasil' },
  ];

  readonly banner = {
    title: 'Disponível para Freelance',
    text: 'Com sólida experiência na elaboração e comercialização de templates e soluções web personalizadas e responsivas, estou aberto a novos projetos autônomos. Vamos tirar sua ideia do papel!',
  };

  readonly formCopy = {
    title: 'Envie uma Mensagem',
    fields: [
      { id: 'nameInput', label: 'Nome', type: 'text', name: 'name', autocomplete: 'name' },
      { id: 'emailInput', label: 'Email', type: 'email', name: 'email', autocomplete: 'email' },
      { id: 'subjectInput', label: 'Assunto', type: 'text', name: 'subject' },
    ] as FormField[],
    messageLabel: 'Mensagem',
    submitLabel: 'Enviar Mensagem',
  };

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    company: [''],
  });

  readonly isSubmitting = computed(() => this.contactService.loading());
  readonly submitError = computed(() => this.contactService.error());
  readonly submitSuccess = computed(() => this.contactService.success());

  constructor() {
    effect(() => {
      if (!this.submitSuccess()) {
        return;
      }

      this.toastr.success('Mensagem enviada com sucesso!');
      this.contactForm.reset({
        name: '',
        email: '',
        subject: '',
        message: '',
        company: '',
      });
      this.submitted.set(false);
    });

    effect(() => {
      const error = this.submitError();
      if (!error) {
        return;
      }

      this.toastr.error(error);
    });
  }

  onSubmit(): void {
    this.submitted.set(true);

    if (this.contactForm.controls.company.value.trim()) {
      return;
    }

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const payload: ContactFormPayload = {
      name: this.contactForm.controls.name.value,
      email: this.contactForm.controls.email.value,
      subject: this.contactForm.controls.subject.value,
      message: this.contactForm.controls.message.value,
    };

    this.contactService.submitForm(payload);
  }

  showFieldError(fieldName: ContactFormFieldName | 'message'): boolean {
    const control = this.contactForm.controls[fieldName];
    return control.invalid && (control.touched || this.submitted());
  }

  getFieldError(fieldName: ContactFormFieldName | 'message', fieldLabel: string): string {
    const errors = this.contactForm.controls[fieldName].errors;
    if (!errors) {
      return '';
    }

    if (errors['required']) {
      return `${fieldLabel} e obrigatorio.`;
    }

    if (errors['email']) {
      return 'Digite um email valido.';
    }

    if (errors['minlength']) {
      const requiredLength = errors['minlength']['requiredLength'] as number;
      return `${fieldLabel} precisa ter pelo menos ${requiredLength} caracteres.`;
    }

    return 'Campo invalido.';
  }
}
