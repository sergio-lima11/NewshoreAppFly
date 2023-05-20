import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVuelosComponent } from './listado-vuelos.component';

describe('ListadoVuelosComponent', () => {
  let component: ListadoVuelosComponent;
  let fixture: ComponentFixture<ListadoVuelosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoVuelosComponent]
    });
    fixture = TestBed.createComponent(ListadoVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
