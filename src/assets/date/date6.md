
> You can combine multiple validators. This example makes sure the provided date is between last week and next week.

```typescript
const today = new Date(Date.now());
const previousWeek: Date = new Date();
const nextWeek: Date = new Date();
previousWeek.setDate(new Date().getDate() - 7);
nextWeek.setDate(new Date().getDate() + 7);

this.dateForm = new FormBuilder().group({
    date6: [today, [
                DateValidator.isAfter(previousWeek, `Must be after ${previousWeek.toJSON().slice(0, 10)}`),
                DateValidator.isBefore(nextWeek, `Must be before ${nextWeek.toJSON().slice(0, 10)}`)
            ]
        ]
});
```
