import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPizzasComponent } from './tabla-pizzas.component';

describe('TablaPizzasComponent', () => {
  let component: TablaPizzasComponent;
  let fixture: ComponentFixture<TablaPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPizzasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
