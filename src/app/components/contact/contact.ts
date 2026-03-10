import { Component } from '@angular/core';
import { LucideAngularModule, Mail, Phone, MapPin, Send } from "lucide-angular";

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly Mail = Mail;
  readonly Pin = MapPin;
  readonly Phone = Phone;
  readonly Send = Send;
}
