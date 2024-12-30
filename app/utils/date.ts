export function eventDate(year: number, month: number): Date {
  const paddedMonth = ('' + month).padStart(2, '0');
  return new Date(Date.parse(`${year}-${paddedMonth}-01T00:00:00.000Z`));
}

export function nowEventDate(): Date {
  const now = new Date();
  return eventDate(now.getFullYear(), now.getMonth());
}
