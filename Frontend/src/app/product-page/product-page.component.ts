import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { CartService } from '../services/cart.service';
import {ProductService} from '../services/product.service';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.loadProduct(+productId);
    }
  }

  loadProduct(productId: number): void {
    this.productService.getProductById(productId).subscribe(
      (data) => {
        this.product = { ...data, image: this.imageService.getImagePath(productId) };
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }


  addToCarts(): void {
    if (this.product) {
      console.log('Adding product to cart:', this.product); // Debugging log
       this.cartService.addToCart(this.product).subscribe(
        () => {
          console.log('Product added to cart successfully!');
          this.router.navigate(['/cart']);
        },
        (error) => {
          console.error('Error adding product to cart:', error);
        }
      );
    } else {
      console.warn('No product available to add to cart.');
    }
  }

}
