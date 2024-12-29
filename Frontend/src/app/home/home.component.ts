import {Component, OnInit} from '@angular/core';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import {RouterLink} from '@angular/router';
import {ProductService} from '../services/product.service';
import { NgFor } from '@angular/common'; // Add this import
import {HttpClientModule} from '@angular/common/http';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlideshowComponent, RouterLink, NgFor], // Add HttpClientModule here
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  products: any[] = [];

  brands = [
    { name: 'Apple', logo: 'assets/Logos/Apple.png' },
    { name: 'Huawei', logo: 'assets/Logos/Huawei.png' },
    { name: 'LG', logo: 'assets/Logos/Lg.png' },
    { name: 'Xiaomi', logo: 'assets/Logos/Xiaomi.png' },
  ];

  testimonials = [
    {
      message:
        'Exceptional service, outstanding products, and a customer-centric approach make this store an absolute gem. A shopping experience that guarantees satisfaction at every turn.',
      author: 'Cindy Mamado',
    },
    {
      message:
        'Shopping at this store has been an absolute delight! From the incredible product selection to the personalized customer care, every aspect is designed to exceed expectations.',
      author: 'Rieman Tomson',
    },
    {
      message:
        "This store is a customer's dream come true. Impeccable service, a vast selection of quality products, and lightning-fast shipping make it my go-to destination. I can't recommend it enough!",
      author: 'Brian Krupich',
    },
  ];

  constructor(private productService: ProductService,
              private imageService: ImageService) {}

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data.map((product) => ({
          ...product,
          image: this.imageService.getImagePath(product.id),
        }));
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
