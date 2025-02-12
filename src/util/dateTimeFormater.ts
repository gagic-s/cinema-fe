export const dateFormatter = (
  date: string | Date,
  locale: string = "en-US"
) => {
  return new Date(date).toLocaleDateString(locale, {
    weekday: "long",
    month: "short",
    day: "2-digit",
  });
};

export const timeFormatter = (
  time: string | Date,
  locale: string = "en-US",
  options?: Intl.DateTimeFormatOptions
) => {
  return new Date(time).toLocaleTimeString(
    locale,
    options || { hour: "2-digit", minute: "2-digit" }
  );
};
