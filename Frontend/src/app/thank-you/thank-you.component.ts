import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.css'
})
export class ThankYouComponent implements OnInit {

  firstName: string = '';
  phoneNumber: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.firstName = navigation.extras.state['firstName'] || '';
      this.phoneNumber = navigation.extras.state['phoneNumber'] || '';
    } else {
      console.error('No state data found in navigation');
    }
  }

  ngOnInit(): void {}

}
