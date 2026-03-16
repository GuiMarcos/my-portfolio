import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ContactFormPayload } from '@shared/models/contact.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly formspreeEndpoint = environment.contactForm.formspreeEndpoint;

  readonly loading = signal(false);
  readonly success = signal(false);
  readonly error = signal<string | null>(null);

  submitForm(payload: ContactFormPayload): void {
    if (this.loading()) {
      return;
    }

    if (!this.formspreeEndpoint) {
      this.error.set('Endpoint de contato nao configurado.');
      return;
    }

    this.loading.set(true);
    this.success.set(false);
    this.error.set(null);

    this.http
      .post(
        this.formspreeEndpoint,
        {
          name: payload.name,
          email: payload.email,
          subject: payload.subject,
          message: payload.message,
        },
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      .subscribe({
        next: () => {
          this.success.set(true);
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Nao foi possivel enviar sua mensagem agora. Tente novamente em instantes.');
          this.loading.set(false);
        },
      });
  }
}
