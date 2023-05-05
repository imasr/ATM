import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AtmOverviewComponent } from './atm-overview.component';

describe('AtmOverviewComponent', () => {
  let component: AtmOverviewComponent;
  let fixture: ComponentFixture<AtmOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AtmOverviewComponent],
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
    expect(compiled.querySelector('h3').textContent).toContain('Employee');
  });
  it(`should have as button 'Create'`, () => {
    const fixture = TestBed.createComponent(AtmOverviewComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Create');
  });
});
