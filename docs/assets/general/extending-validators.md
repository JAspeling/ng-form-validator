> Any validator can be extended. All you have to do is create your own validator class that `extends` from another validator.
> 
> The type of validator you are extending provides you with the pre-defined functions that validator is already using.

## How the validators work
Each validator uses a set of pre-defined rules on a specific data type that will:
1. Returns a `ValidatorFn` 
2. that accepts a `FormControl` as a parameter
3. and returns an instance of `ValidationErrors`
