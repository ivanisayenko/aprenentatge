import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedireccionarComponent } from './redireccionar.component';

describe('RedireccionarComponent', () => {
  let component: RedireccionarComponent;
  let fixture: ComponentFixture<RedireccionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedireccionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedireccionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
