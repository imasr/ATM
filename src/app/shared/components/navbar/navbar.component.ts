import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from './navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() header = '';
  @Input() pages: Page[] = [];
  @Output() navigateTopage: EventEmitter<Page> = new EventEmitter<Page>();

  ngOnInit(): void {}

  gotoPage(page: Page) {
    this.navigateTopage.emit(page);
  }
}
