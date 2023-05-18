import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPizzaComponent } from './modificar-pizza.component';

describe('ModificarPizzaComponent', () => {
  let component: ModificarPizzaComponent;
  let fixture: ComponentFixture<ModificarPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPizzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
