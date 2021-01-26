import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoRecordComponent } from './todo-record.component';

describe('ToDoRecordComponent', () => {
  let component: ToDoRecordComponent;
  let fixture: ComponentFixture<ToDoRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
