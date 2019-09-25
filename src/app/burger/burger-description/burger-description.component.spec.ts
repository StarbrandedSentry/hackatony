import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerDescriptionComponent } from './burger-description.component';

describe('BurgerDescriptionComponent', () => {
  let component: BurgerDescriptionComponent;
  let fixture: ComponentFixture<BurgerDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
