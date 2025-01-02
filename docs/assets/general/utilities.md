> There are various `utility functions` included in the `@validation-builder` package.

##### getFirstErrorFromControl

```ts
/**
 * Gets the first error object from a control if it contains any errors, otherwise return null.
 * @param control The AbstractControl to check for errors
 */
export function getFirstErrorFromControl(control: AbstractControl): string;
```

##### addError

```ts
/**
 * Adds an error to a form control (AbstractControl)
 * @param errorKey The key of the error
 * @param error The error string
 */
export function addError(control: AbstractControl, errorKey: string, error: string): void;
```

##### addErrorsToControl

```ts
/**
 * Adds multiple Validation errors to a form control (AbstractControl).
 * @param control The control on which to add the errors
 * @param errors The ValidationErrors to add to the control.
 */
export function addErrorsToControl(control: AbstractControl, errors: ValidationErrors): void;
```

##### touchedControlHasError

```ts
/**
 * Check to see if the Form Control is touched, and contains an error (is Invalid)
 * @param control The control under question
 */
export function touchedControlHasError(control: AbstractControl): boolean;
```
