import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeito2Component } from './meu-primeito2.component';

describe('MeuPrimeito2Component', () => {
  let component: MeuPrimeito2Component;
  let fixture: ComponentFixture<MeuPrimeito2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPrimeito2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeito2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
