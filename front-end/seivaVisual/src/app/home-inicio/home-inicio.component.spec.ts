import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInicioComponent } from './home-inicio.component';

describe('HomeInicioComponent', () => {
  let component: HomeInicioComponent;
  let fixture: ComponentFixture<HomeInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
