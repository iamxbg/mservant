import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEventComponent } from './todo-event.component';

describe('TodoEventComponent', () => {
  let component: TodoEventComponent;
  let fixture: ComponentFixture<TodoEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
