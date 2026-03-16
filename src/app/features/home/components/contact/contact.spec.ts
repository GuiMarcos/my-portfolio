import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Contact } from './contact';
import { ContactService } from '@core/services/contact.service';

class ContactServiceMock {
  readonly loading = signal(false);
  readonly success = signal(false);
  readonly error = signal<string | null>(null);

  submitForm(): void { }
}

class ToastrServiceMock {
  success(): void { }
  error(): void { }
}

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [
        { provide: ContactService, useClass: ContactServiceMock },
        { provide: ToastrService, useClass: ToastrServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
