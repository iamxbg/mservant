import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberWordComponent } from './remember-word.component';

describe('RememberWordComponent', () => {
  let component: RememberWordComponent;
  let fixture: ComponentFixture<RememberWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RememberWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
