import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPizzaComponent } from './borrar-pizza.component';

describe('BorrarPizzaComponent', () => {
  let component: BorrarPizzaComponent;
  let fixture: ComponentFixture<BorrarPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarPizzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
