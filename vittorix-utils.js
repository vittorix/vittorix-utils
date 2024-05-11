const checkString = function (str) {
  return isString(str) || throwErr("ERROR. Not a string: " + str);
};

const isEmpty = function (str) {
  // const s = str ? true : false
  // p('string in isEmpty: <'+ str + '> + s: ' + s)
  // checkString(str)
  return !str || !isString(str) || /^\s*$/.test(str);
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

const pa = (array, arrayName) => {
  if (isNotEmpty(arrayName)) {
    p(arrayName + ": ");
  }
  array.forEach((element) => {
    p(element);
  });
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

const test = (condition, errorMessage) => {
  return condition || throwErr("ERROR. " + errorMessage);
};

//prettier-ignore
const testNot = (boolCondition, errorMessage) => {
    if (boolCondition)
      throwErr("Condition should be false. " + errorMessage + " condition: <" + boolCondition + ">: ")
}

export {
  isEmpty,
  isNotEmpty,
  isString,
  p,
  pa,
  parse,
  randomBoolean,
  stringy,
  test,
  testNot
};
