import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerDescriptionsComponent } from './burger-descriptions.component';

describe('BurgerDescriptionsComponent', () => {
  let component: BurgerDescriptionsComponent;
  let fixture: ComponentFixture<BurgerDescriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerDescriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
