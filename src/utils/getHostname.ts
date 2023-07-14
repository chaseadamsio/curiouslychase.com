export const getHostnameNaked = (): string => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:4242"
    : "https://curiouslychase.com";
};

export const getHostname = (): URL => {
  return new URL(getHostnameNaked());
};
