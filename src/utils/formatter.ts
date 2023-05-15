export const formatNumber = (num: number): string => {
  if (num < 10_000) return num.toString();

  const formatter = Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
  });

  return formatter.format(num);
};
