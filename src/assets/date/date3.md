> When you dont want the date to be in the past, you can just use the `DateValidator.notInThePast()` validator.

```typescript
const today = new Date(Date.now());

this.dateForm = new FormBuilder().group({
  date3: [today, DateValidator.notInThePast()],
});
```
