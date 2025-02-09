export const dateFormatter = (
  date: string | Date,
  locale: string = "en-US"
) => {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
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
