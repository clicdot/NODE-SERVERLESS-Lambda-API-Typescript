export const responseTime = Date.now();

export const responseTimeEnd = (start) => {
  return `${Date.now() - start}ms`;
};
