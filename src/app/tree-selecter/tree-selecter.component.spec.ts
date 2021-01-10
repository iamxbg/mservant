import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeSelecterComponent } from './tree-selecter.component';

describe('TreeSelecterComponent', () => {
  let component: TreeSelecterComponent;
  let fixture: ComponentFixture<TreeSelecterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSelecterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeSelecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
