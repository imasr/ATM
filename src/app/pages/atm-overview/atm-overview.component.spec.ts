import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AtmOverviewComponent } from './atm-overview.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CommonTableModule } from './../../shared/components/common-table/common-table.module';

describe('AtmOverviewComponent', () => {
  let component: AtmOverviewComponent;
  let fixture: ComponentFixture<AtmOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmOverviewComponent],
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
    fixture = TestBed.createComponent(AtmOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'Employee'`, () => {
    const fixture = TestBed.createComponent(AtmOverviewComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(
      'Stock Available in ATM'
    );
  });
});
