> When not using a third party, it might be possible to change the form-value of the item to something other than a date. The `DateValidator.isValid()` will make sure there is a valid date in the form control:

```typescript
const today = new Date(Date.now());

this.dateForm = new FormBuilder().group({
  date2: [today, DateValidator.isValid()],
});
```
