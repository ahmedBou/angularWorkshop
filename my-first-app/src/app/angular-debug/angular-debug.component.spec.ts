import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDebugComponent } from './angular-debug.component';

describe('AngularDebugComponent', () => {
  let component: AngularDebugComponent;
  let fixture: ComponentFixture<AngularDebugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDebugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
