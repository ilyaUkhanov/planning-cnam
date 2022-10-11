export const capitalizeFirstLetter = ([first, ...rest]: string) =>
  [first.toUpperCase(), ...rest].join("");

export const hex2rgba = (hex: string, alpha: number = 1) => {
  if (!hex) return null;
  const [r, g, b] = (hex.match(/\w\w/g) ?? []).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
