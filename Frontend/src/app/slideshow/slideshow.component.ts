import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent implements OnInit {
  /*
  // Array of image URLs
    images: string[] = [
      'assets/slide_show/slide1.jpg',
      'assets/slide_show/slide2.jpg',
      'assets/slide_show/slide3.jpg'
    ];

    currentIndex: number = 0; // Track the current slide index

    ngOnInit() {
      // Auto-slide every 3 seconds
      setInterval(() => {
        this.nextSlide();
      }, 3000);
    }

    // Move to the next slide
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }

    // Move to the previous slide
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }

   */


  slides = [
    { image: 'assets/slide_show/slide1.jpg', caption: 'Welcome to Our Store!' },
    { image: 'assets/slide_show/slide2.jpg', caption: 'Find the Best Products!' },
    { image: 'assets/slide_show/slide3.jpg', caption: 'Shop With Confidence!' },
  ];

  currentSlide = 0;

  constructor() {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }
}
