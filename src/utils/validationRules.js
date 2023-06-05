const emailRegExp = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
const passwordRegExp = new RegExp(/^(?=.*[A-Za-z])(?=.*[\d])(?=.*[\W_])[a-zA-Z0-9\W_]{7,256}$/);

export const isRequired = (val) => ({
  hasPassed: !!val,
  message: 'Please compilare this field.'
})

export const chartLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "You exceed the limit.",
});

export const emailValidation = (val) => ({
  hasPassed: emailRegExp.test(val),
  message: "Wrong email",
});

export const passwordValidation = (val) => ({
  hasPassed: passwordRegExp.test(val),
  message: "The password must have at least one big letter and one sym",
});