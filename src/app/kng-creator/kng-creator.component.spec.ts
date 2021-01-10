import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KngCreatorComponent } from './kng-creator.component';

describe('KngCreatorComponent', () => {
  let component: KngCreatorComponent;
  let fixture: ComponentFixture<KngCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KngCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KngCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
