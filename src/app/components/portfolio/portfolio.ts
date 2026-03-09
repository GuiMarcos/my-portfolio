import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-portfolio',
  imports: [NgOptimizedImage],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio { }
