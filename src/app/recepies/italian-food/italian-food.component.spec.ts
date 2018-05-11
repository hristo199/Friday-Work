import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianFoodComponent } from './italian-food.component';

describe('ItalianFoodComponent', () => {
  let component: ItalianFoodComponent;
  let fixture: ComponentFixture<ItalianFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalianFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
