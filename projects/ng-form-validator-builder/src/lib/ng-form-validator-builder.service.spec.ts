import { TestBed } from '@angular/core/testing';

import { NgFormValidatorBuilderService } from './ng-form-validator-builder.service';

describe('NgFormValidatorBuilderService', () => {
  let service: NgFormValidatorBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFormValidatorBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
