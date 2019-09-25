import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerItemsComponent } from './burger-items.component';

describe('BurgerItemsComponent', () => {
  let component: BurgerItemsComponent;
  let fixture: ComponentFixture<BurgerItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
