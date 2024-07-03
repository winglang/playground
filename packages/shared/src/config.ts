export const isSelfHosted = () => {
  return import.meta.env.VITE_SELF_HOSTED === "true";
};
