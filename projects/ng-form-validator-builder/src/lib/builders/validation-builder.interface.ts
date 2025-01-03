import { ValidationErrors } from '@angular/forms';

export interface IValidationBuilder<T> {
  /**
   * Adds a specified error on the Form Control when the callback function is satisfied.
   * @param callbackFn The callback function that will execute to check if the error should be added when it is satisfied.
   * @param errorKey The key of the error message.
   * @param errorMessage The error message.
   */
  ifTrue(
    callbackFn: (value: T) => boolean,
    errorKey: string,
    errorMessage: string,
  ): IValidationBuilder<T>;

  /**
   * Adds a specified error on the Form Control when the callback function is not satisfied.
   * @param callbackFn The callback function that will execute to check if the error should be added when it is not satisfied.
   * @param errorKey The key of the error message.
   * @param errorMessage The error message.
   */
  ifFalse(
    callbackFn: (value: T) => boolean,
    errorKey: string,
    errorMessage: string,
  ): IValidationBuilder<T>;

  /**
   * Marks the Form Control as required.
   */
  isRequired(): IValidationBuilder<T>;

  /**
   * Ignores all further validation in the chain when the callback function is satisfied.
   * @param callbackFn The callback function that will execute to check if the rest of the validation should be ignored.
   */
  ignoreWhen(callbackFn: (value: T) => boolean): IValidationBuilder<T>;

  /**
   * Overrides any existing error, and returns an error specified.
   * @param message The error message.
   * @param property the key of the error message.
   */
  withMessage(message: string, property?: string): IValidationBuilder<T>;

  /**
   * Adds errors to the formControl.
   */
  addErrors(): IValidationBuilder<T>;

  /**
   * Returns the Validation Errors that are on the Form Control
   */
  build(): ValidationErrors;
}
