import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorisComponent } from './repositoris.component';

describe('RepositorisComponent', () => {
  let component: RepositorisComponent;
  let fixture: ComponentFixture<RepositorisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
