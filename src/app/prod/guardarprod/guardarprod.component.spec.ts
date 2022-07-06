import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarprodComponent } from './guardarprod.component';

describe('GuardarprodComponent', () => {
  let component: GuardarprodComponent;
  let fixture: ComponentFixture<GuardarprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
