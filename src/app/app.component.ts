import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { pages } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  title = 'ATM Machine';
  page = pages;
  constructor(private router: Router) {}

  navigateTopage(page: { label: string; path: string }) {
    this.router.navigate([page.path]);
  }
}
