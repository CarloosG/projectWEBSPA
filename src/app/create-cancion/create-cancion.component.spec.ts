import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCancionComponent } from './create-cancion.component';

describe('CreateCancionComponent', () => {
  let component: CreateCancionComponent;
  let fixture: ComponentFixture<CreateCancionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCancionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
