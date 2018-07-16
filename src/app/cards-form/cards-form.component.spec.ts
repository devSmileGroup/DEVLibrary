import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFormComponent } from './cards-form.component';

describe('CardsFormComponent', () => {
  let component: CardsFormComponent;
  let fixture: ComponentFixture<CardsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
