> You can override the validator with a custom error message, by providing a string to the validator function

```typescript
const today = new Date(Date.now());

this.dateForm = new FormBuilder().group({
  date7: [today, [DateValidator.isValid('This is a custom error message :)')]],
});
```
