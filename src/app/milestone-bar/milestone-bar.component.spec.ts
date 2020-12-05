import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneBarComponent } from './milestone-bar.component';

describe('MilestoneBarComponent', () => {
  let component: MilestoneBarComponent;
  let fixture: ComponentFixture<MilestoneBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilestoneBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestoneBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
