import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemTemaComponent } from './postagem-tema.component';

describe('PostagemTemaComponent', () => {
  let component: PostagemTemaComponent;
  let fixture: ComponentFixture<PostagemTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostagemTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
