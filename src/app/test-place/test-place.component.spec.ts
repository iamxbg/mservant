import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPlaceComponent } from './test-place.component';

describe('TestPlaceComponent', () => {
  let component: TestPlaceComponent;
  let fixture: ComponentFixture<TestPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
