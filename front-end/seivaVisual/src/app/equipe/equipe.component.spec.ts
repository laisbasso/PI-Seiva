import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeComponent } from './equipe.component';

describe('EquipeComponent', () => {
  let component: EquipeComponent;
  let fixture: ComponentFixture<EquipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
