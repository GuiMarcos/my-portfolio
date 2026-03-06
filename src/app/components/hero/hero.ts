import { Component } from '@angular/core';
import { LucideAngularModule, Github, Linkedin, Mail, ArrowDown } from "lucide-angular";
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly ArrowDown = ArrowDown;
}
