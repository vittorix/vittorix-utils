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

const parse = function (str) {
  return JSON.parse(str);
};

const stringy = function (obj) {
  return JSON.stringify(obj);
};

function throwErr(err) {
  throw err;
}

export { isEmpty, isNotEmpty, isString, p, parse, stringy };
