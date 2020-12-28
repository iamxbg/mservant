import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoResultComponent } from './todo-result.component';

describe('ToDoResultComponent', () => {
  let component: ToDoResultComponent;
  let fixture: ComponentFixture<ToDoResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
