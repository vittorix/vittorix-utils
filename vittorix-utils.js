//prettier-ignore
const assertErr = (condition, errorMessage) => {
    if (condition)
      throwErr("Test was supposed to an error. " + errorMessage + " condition: <" + condition + ">: ")
};

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

const randomBoolean = () => {
  return Math.random() < 0.5;
};

const stringy = function (obj) {
  return JSON.stringify(obj);
};

function throwErr(err) {
  throw err;
}

const test =  (condition, errorMessage) => {
  return condition || throwErr("ERROR. " + errorMessage);
};

export { assertErr, isEmpty, isNotEmpty, isString, p, parse, randomBoolean, stringy, test };
