import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawComponent } from './withdraw.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

describe('WithdrawComponent', () => {
  let component: WithdrawComponent;
  let fixture: ComponentFixture<WithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithdrawComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        ReactiveFormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
