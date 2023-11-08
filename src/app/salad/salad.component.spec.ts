import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladComponent } from './salad.component';

describe('SaladComponent', () => {
  let component: SaladComponent;
  let fixture: ComponentFixture<SaladComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaladComponent]
    });
    fixture = TestBed.createComponent(SaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
