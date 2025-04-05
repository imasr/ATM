import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ReStockComponent } from './restock.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ReStockComponent', () => {
  let component: ReStockComponent;
  let fixture: ComponentFixture<ReStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ReStockComponent],
    imports: [RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as button 'Create'`, () => {
    const fixture = TestBed.createComponent(ReStockComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Create');
  });
});
