import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidorAltaComponent } from './repartidor-alta.component';

describe('RepartidorAltaComponent', () => {
  let component: RepartidorAltaComponent;
  let fixture: ComponentFixture<RepartidorAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartidorAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepartidorAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
