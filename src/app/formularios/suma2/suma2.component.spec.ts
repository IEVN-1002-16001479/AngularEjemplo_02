import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suma2Component } from './suma2.component';

describe('Suma2Component', () => {
  let component: Suma2Component;
  let fixture: ComponentFixture<Suma2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Suma2Component]
    });
    fixture = TestBed.createComponent(Suma2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
