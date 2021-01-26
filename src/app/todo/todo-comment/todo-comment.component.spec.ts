import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCommentComponent } from './todo-comment.component';

describe('ToDoCommentComponent', () => {
  let component: ToDoCommentComponent;
  let fixture: ComponentFixture<ToDoCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
