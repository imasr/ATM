import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ReStockComponent } from './restock.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CommonTableModule } from './../../shared/components/common-table/common-table.module';

describe('ReStockComponent', () => {
  let component: ReStockComponent;
  let fixture: ComponentFixture<ReStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReStockComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        CommonTableModule,
      ],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
