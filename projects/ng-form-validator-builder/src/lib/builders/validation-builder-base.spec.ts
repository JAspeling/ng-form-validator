import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { GenericValidator } from '../validators/generic-validator';
import { ValidationBuilderBase } from './validation-builder-base';

describe(`ValidationBuilderBase`, () => {
  let formGroup: UntypedFormGroup;
  let validator: ValidationBuilderBase<unknown>;

  function control(): UntypedFormControl {
    return formGroup.get('test') as UntypedFormControl;
  }

  function reset(): void {
    formGroup = new UntypedFormBuilder().group({
      test: [null],
    });
    validator = new ValidationBuilderBase();
    validator.baseControl = control();
  }

  beforeEach(() => {
    reset();
  });

  describe(`ifTrue`, () => {
    describe(`Not using the validationBuilderBase control value`, () => {
      it(`should add the validation error if the condition results in true`, () => {
        const result = validator
          .ifTrue(
            () => 50 < 100,
            'error',
            `Expected to add an error when 50 < 100`,
          )
          .build();
        expect(result).toEqual({
          error: 'Expected to add an error when 50 < 100',
        });
      });

      it(`should not add the validation error if the condition results in false`, () => {
        const result = validator
          .ifTrue(
            () => 50 > 100,
            'error',
            `Shouldn't add an error, as (50 > 100) === false`,
          )
          .build();
        expect(result).toEqual(null);
      });
    });

    describe(`using the validationBuilderBase control value`, () => {
      beforeEach(() => {
        validator.baseControl.setValue('Johan');
      });

      it(`should add the validation error if the condition results in true (value === 'Johan')`, () => {
        const result = validator
          .ifTrue(
            (value) => value === 'Johan',
            'error',
            `Expected to add an error when value === 'Johan'`,
          )
          .build();
        expect(result).toEqual({
          error: `Expected to add an error when value === 'Johan'`,
        });
      });

      it(`should not add the validation error if the condition results in false (value === 'Hermanus')`, () => {
        const result = validator
          .ifTrue(
            (value) => value === 'Hermanus',
            'error',
            `Shouldn't add an error, as value ('Johan') !== 'Hermanus')`,
          )
          .build();
        expect(result).toEqual(null);
      });
    });
  });

  describe(`ifFalse`, () => {
    describe(`Not using the validationBuilderBase control value`, () => {
      it(`should add the validation error if the condition results in false`, () => {
        const result = validator
          .ifFalse(
            () => 50 > 100,
            'error',
            'Expected to add an error when the condition fails (50 > 100)',
          )
          .build();
        expect(result).toEqual({
          error: 'Expected to add an error when the condition fails (50 > 100)',
        });
      });

      it(`should not add the validation error if the condition results in false`, () => {
        const result = validator
          .ifFalse(
            () => 50 < 100,
            'error',
            `Shouldn't add an error, as the condition 50 < 100 passes, where it shouldn't`,
          )
          .build();
        expect(result).toEqual(null);
      });
    });

    describe(`using the validationBuilderBase control value`, () => {
      beforeEach(() => {
        validator.baseControl.setValue('Johan');
      });

      it(`should add the validation error if the condition results in false (value === 'Hermanus')`, () => {
        const result = validator
          .ifFalse(
            (value) => value === 'Hermanus',
            'error',
            `Expected to add an error, because value ('Johan') !== 'Hermanus'`,
          )
          .build();
        expect(result).toEqual({
          error: `Expected to add an error, because value ('Johan') !== 'Hermanus'`,
        });
      });

      it(`should not add the validation error if the condition results in false (value === 'Johan')`, () => {
        const result = validator
          .ifFalse(
            (value) => value === 'Johan',
            'error',
            `Shouldn't add an error, as the condition value ('Johan') === 'Johan'`,
          )
          .build();
        expect(result).toEqual(null);
      });
    });
  });

  describe(`baseControl/Value`, () => {
    beforeEach(() => {
      reset();
    });

    it(`should not affect the value on the baseControl when the value in the validator is set`, () => {
      validator.value = 'John Doe';

      expect(validator.controlValue).toBe(null);
    });
  });

  describe(`isRequired`, () => {
    afterAll(() => {
      reset();
    });

    it(`should have a required validator with @angular/forms required`, () => {
      control().setValidators(Validators.required);

      const result = validator.isRequired().build();
      expect(result).toEqual({ required: 'Required Field' });
    });

    it(`should have a required validator with RequiredValidatorWithGenericMessage`, () => {
      control().setValidators(GenericValidator.isRequired());

      const result = validator.isRequired().build();
      expect(result).toEqual({ required: 'Required Field' });
    });
  });

  describe(`withMessage`, () => {
    const OVERRIDE_ERROR = 'Override custom error';
    const CUSTOM_ERROR = 'custom Error';
    it(`should replace the previous errors with a custom message: {customError: '${OVERRIDE_ERROR}'}`, () => {
      validator.baseErrors.error = CUSTOM_ERROR;

      const result = validator
        .withMessage(OVERRIDE_ERROR, 'customError')
        .build();
      expect(result).toEqual({ customError: OVERRIDE_ERROR });
    });

    it(`should replace the previous errors with a custom message: {error: '${OVERRIDE_ERROR}'}`, () => {
      validator.baseErrors.error = CUSTOM_ERROR;

      const result = validator.withMessage(OVERRIDE_ERROR).build();
      expect(result).toEqual({ error: OVERRIDE_ERROR });
    });

    it(`should replace the previous errors with a custom message: {My error key with spaces: '${OVERRIDE_ERROR}'}`, () => {
      validator.baseErrors.error = CUSTOM_ERROR;

      const result = validator
        .withMessage(OVERRIDE_ERROR, 'My error key with spaces')
        .build();
      expect(result).toEqual({ 'My error key with spaces': OVERRIDE_ERROR });
    });

    it(`should replace the previous errors with a custom message: {error: '${OVERRIDE_ERROR}'}`, () => {
      validator.baseErrors.error = CUSTOM_ERROR;

      const result = validator.withMessage('').build();
      expect(result).toEqual({ error: CUSTOM_ERROR });
    });
  });
});
