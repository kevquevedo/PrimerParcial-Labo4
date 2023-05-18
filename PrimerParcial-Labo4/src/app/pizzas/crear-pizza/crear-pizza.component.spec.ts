import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPizzaComponent } from './crear-pizza.component';

describe('CrearPizzaComponent', () => {
  let component: CrearPizzaComponent;
  let fixture: ComponentFixture<CrearPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPizzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
