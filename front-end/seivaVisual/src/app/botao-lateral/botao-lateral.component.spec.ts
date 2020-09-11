import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoLateralComponent } from './botao-lateral.component';

describe('BotaoLateralComponent', () => {
  let component: BotaoLateralComponent;
  let fixture: ComponentFixture<BotaoLateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoLateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
