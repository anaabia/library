export const concatString = (stringValue1, stringValue2, character) => stringValue1.concat(character).concat(stringValue2);

export const groupBy = (xs, key)  => {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };