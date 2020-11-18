
> You can specify a specific date, and make sure the value in the `formControl` should be before the specified date.

```typescript
const today = new Date(Date.now());
const nextWeek: Date = new Date();
nextWeek.setDate(new Date().getDate() + 7);

this.dateForm = new FormBuilder().group({
    date4: [today, DateValidator.isBefore(nextWeek)],
});
```
