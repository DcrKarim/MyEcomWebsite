import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Ensures the service is available app-wide
})
export class ImageService {
  // Define image paths for each product ID
  private imagePaths: { [key: number]: string } = {
    1: 'assets/collection_images/Mouse.jpg',
    2: 'assets/collection_images/Keyboard.jpg',
    3: 'assets/collection_images/Stand.jpg',
    4: 'assets/collection_images/Hubusb.jpg',
    5: 'assets/collection_images/Headphones.jpg',
    6: 'assets/collection_images/Speaker.jpg',
    7: 'assets/collection_images/Led.jpg',
    8: 'assets/collection_images/Wireless.jpg',
    9: 'assets/collection_images/SSD.jpg',
    10: 'assets/collection_images/Tracker.jpg',
    11: 'assets/collection_images/Desk.jpg',
    12: 'assets/collection_images/Camera.jpg',
    // Add more mappings here as needed
  };

  // Function to get the image path for a given product ID
  getImagePath(productId: number): string {
    return this.imagePaths[productId] || 'assets/collection_images/default.jpg'; // Fallback to default image
  }
}
