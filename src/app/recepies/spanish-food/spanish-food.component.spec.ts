import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishFoodComponent } from './spanish-food.component';

describe('SpanishFoodComponent', () => {
  let component: SpanishFoodComponent;
  let fixture: ComponentFixture<SpanishFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
