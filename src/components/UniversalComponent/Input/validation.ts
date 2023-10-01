export const validation = (value: string, placeHolder: string | undefined, setError: (value: boolean) => void) => {
  const regExpSymbols = new RegExp(/[\\@#$/:?{~!"^_`\[\]]/);
  const reselect = +value;
  if (placeHolder === "Day") {
    if (reselect > 31) {
      setError(true);
    } else {
      setError(false);
    }
  }
  if (placeHolder === "Year") {
    if (reselect > 2013 || (reselect > 1 && reselect < 1900)) {
      setError(true);
    } else {
      setError(false);
    }
  }
  if (placeHolder === "City") {
    if (value.split("").length > 100 || regExpSymbols.test(value) || (!value !== true && value.split("").length < 3)) {
      setError(true);
    } else {
      setError(false);
    }
  }
};
