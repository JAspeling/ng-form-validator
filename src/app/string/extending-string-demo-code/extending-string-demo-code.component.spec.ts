import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendingStringDemoCodeComponent } from './extending-string-demo-code.component';

describe('ExtendingStringDemoCodeComponent', () => {
  let component: ExtendingStringDemoCodeComponent;
  let fixture: ComponentFixture<ExtendingStringDemoCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendingStringDemoCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendingStringDemoCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
