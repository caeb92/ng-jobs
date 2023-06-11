import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostularOfertaComponent } from './postular-oferta.component';

describe('PostularOfertaComponent', () => {
  let component: PostularOfertaComponent;
  let fixture: ComponentFixture<PostularOfertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostularOfertaComponent]
    });
    fixture = TestBed.createComponent(PostularOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
