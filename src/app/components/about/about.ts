import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, ChevronsLeftRight, Lightbulb, Zap } from 'lucide-angular';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly Chevrons = ChevronsLeftRight;
  readonly Lightbulb = Lightbulb;
  readonly Zap = Zap;
}
