# Validation Builder

Built with one purpose - Make Reactive form validation in Angular easier to use.

- [Validation Builder](#validation-builder)
  - [- Extending validators](#--extending-validators)
- [Getting started](#getting-started)
  - [Install the library](#install-the-library)
  - [Start using the validators](#start-using-the-validators)
- [Combining Validators](#combining-validators)
- [How it works behind the scenes](#how-it-works-behind-the-scenes)
- [Extending validators](#extending-validators)

---

# Getting started

Take a look at [the live demo](https://jaspeling.github.io/ng-form-validator/) to play around with the validators

## Install the library

```powershell
npm i ng-form-validator-builder
```

## Start using the validators

You can add validators using the formBuilder to create a form:

```typescript
const nextWeek: Date = new Date();
nextWeek.setDate(new Date().getDate() + 7);

const form = new FormBuilder().group({
    someDate: [new Date(), DateValidator.isBefore(nextWeek),
    anotherDate: [new Date(), DateValidator.isBefore(nextWeek, 'With a custom error message'),
    clientName: ['', StringValidator.maxLengthAllowed('25', 'Name is too long!')],
    email: ['', [
        GenericValidator.isRequired('Email is required'),
        stringValidator.email('Please provide a valid email address :)')
        ]
    ],
    age: [0, NumericValidator.greaterThan(18, 'You need to be older than 18!')
});
```

---

# More examples

See [the live demo](https://jaspeling.github.io/ng-form-validator/) for informaion on using the validators
