> You can specify a specific date, and make sure the value in the `formControl` should be after the specified date.

```typescript
const today = new Date(Date.now());
const nextWeek: Date = new Date();
nextWeek.setDate(new Date().getDate() + 7);

this.dateForm = new FormBuilder().group({
  date5: [today, DateValidator.isAfter(nextWeek)],
});
```
