export function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined;
}

export function isNullOrWhitespace(value: string): boolean {
  if (isNullOrUndefined(value)) {
    return true;
  }

  return value.trim() === '';
}

export function isEmptyObject(obj: any): boolean {
  return obj && Object.keys(obj).length === 0;
}

export function deleteAllPropertiesOfObject(obj: any): void {
  // dont care about inherited properties - want to clear all the properties.

  if (isNullOrUndefined(obj)) {
    return;
  }

  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    delete obj[key];
  }
}

export function dateIsInThePast(date: Date): boolean {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  return currentDate > date;
}
