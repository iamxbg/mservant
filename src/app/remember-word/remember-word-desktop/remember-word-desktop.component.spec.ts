import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberWordDesktopComponent } from './remember-word-desktop.component';

describe('RememberWordComponent', () => {
  let component: RememberWordDesktopComponent;
  let fixture: ComponentFixture<RememberWordDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RememberWordDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberWordDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
