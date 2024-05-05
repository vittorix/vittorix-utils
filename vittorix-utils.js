const checkString = function (str) {
  return isString(str) || throwErr("ERROR. Not a string: " + str);
};

const isEmpty = function (str) {
  checkString(str);
  return !str || /^\s*$/.test(str);
};

const isNotEmpty = function (string) {
  return !isEmpty(string);
};

const isString = function (str) {
  return typeof str === "string" || str instanceof String;
};

const p = function (string) {
  console.log(string);
};

function throwErr(err) {
  throw err;
}

export { isEmpty, isNotEmpty, isString, p };
