
> No Custom validation, but `ngx-bootstap` requires it to have at least a valid date:

```typescript
const today = new Date(Date.now());

this.dateForm = new FormBuilder().group({
    date1: [today]
});
```
