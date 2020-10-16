import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormValidatorBuilderComponent } from './ng-form-validator-builder.component';

describe('NgFormValidatorBuilderComponent', () => {
  let component: NgFormValidatorBuilderComponent;
  let fixture: ComponentFixture<NgFormValidatorBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFormValidatorBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormValidatorBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
