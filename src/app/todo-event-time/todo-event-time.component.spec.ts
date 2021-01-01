import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEventTimeComponent } from './todo-event-time.component';

describe('TodoEventTimeComponent', () => {
  let component: TodoEventTimeComponent;
  let fixture: ComponentFixture<TodoEventTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEventTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEventTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
