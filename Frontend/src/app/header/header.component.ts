import { Component } from '@angular/core';
import {RouterModule,RouterLink,RouterOutlet} from '@angular/router';
import {AboutUsComponent} from '../about-us/about-us.component';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, AboutUsComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
