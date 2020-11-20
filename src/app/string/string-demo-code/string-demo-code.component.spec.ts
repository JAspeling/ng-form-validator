import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringDemoCodeComponent } from './string-demo-code.component';

describe('StringDemoCodeComponent', () => {
  let component: StringDemoCodeComponent;
  let fixture: ComponentFixture<StringDemoCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringDemoCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringDemoCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
