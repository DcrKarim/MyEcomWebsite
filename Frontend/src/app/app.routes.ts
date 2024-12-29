import { Routes } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {CartComponent} from './cart/cart.component';
import {AccountComponent} from './account/account.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ThankYouComponent} from './thank-you/thank-you.component';

export const routes: Routes = [
  {path: 'about-us', component :AboutUsComponent},
  {path: 'contact-us', component :ContactUsComponent},
  {path: 'cart', component :CartComponent},
  {path: 'account', component :AccountComponent},
  {path: 'home', component :HomeComponent},
  {path: 'footer', component :FooterComponent},
  {path: 'slider', component :SlideshowComponent},
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thank-you', component: ThankYouComponent },
];
