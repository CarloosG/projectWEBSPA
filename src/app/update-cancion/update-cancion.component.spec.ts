import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCancionComponent } from './update-cancion.component';

describe('UpdateCancionComponent', () => {
  let component: UpdateCancionComponent;
  let fixture: ComponentFixture<UpdateCancionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCancionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
