import { TestBed } from '@angular/core/testing';

import { ToDoService } from './todo.service';

describe('ToDoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoService = TestBed.get(ToDoService);
    expect(service).toBeTruthy();
  });
});
