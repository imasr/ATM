import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReStockComponent } from './restock.component';

describe('ReStockComponent', () => {
  let component: ReStockComponent;
  let fixture: ComponentFixture<ReStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ReStockComponent],
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
