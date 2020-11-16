# Validation Builder

> The purpose of this package is to extend the existing @angular/forms Validators, and make validation easier to use.


## Using the validators

You can add validators using the formBuilder to create a form:

```typescript
const form = new FormBuilder().group({
    description: ['', []]
});
```
