import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoSubirComponent } from './botao-subir.component';

describe('BotaoSubirComponent', () => {
  let component: BotaoSubirComponent;
  let fixture: ComponentFixture<BotaoSubirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoSubirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoSubirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
