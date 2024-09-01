export const getHostnameNaked = (): string => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:4242"
    : "https://chaseadams.io";
};

export const getHostname = (): URL => {
  return new URL(getHostnameNaked());
};
