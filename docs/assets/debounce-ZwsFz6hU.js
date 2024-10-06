function debounce(func, time) {
  let timeout;
  const debouncedFunction = (...args) => {
    if (debouncedFunction.isDebouncing) {
      clearTimeout(timeout);
    }
    debouncedFunction.isDebouncing = true;
    debouncedFunction.isRunning = false;
    timeout = window.setTimeout(async () => {
      debouncedFunction.isRunning = true;
      await func(...args);
      debouncedFunction.isRunning = false;
      debouncedFunction.isDebouncing = false;
    }, time);
  };
  debouncedFunction.isDebouncing = false;
  debouncedFunction.isRunning = false;
  debouncedFunction.cancel = () => {
    if (debouncedFunction.isDebouncing) {
      clearTimeout(timeout);
      debouncedFunction.isDebouncing = false;
      debouncedFunction.isRunning = false;
    }
  };
  return debouncedFunction;
}
export {
  debounce as d
};
