import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDemoCodeComponent } from './date-demo-code.component';

describe('DateDemoCodeComponent', () => {
  let component: DateDemoCodeComponent;
  let fixture: ComponentFixture<DateDemoCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateDemoCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDemoCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
