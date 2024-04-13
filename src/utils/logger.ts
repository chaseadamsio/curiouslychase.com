export const log = <T>(value: T, identifier = "") => {
  // eslint-disable-next-line no-console
  console.log(identifier, value);

  return value;
};
