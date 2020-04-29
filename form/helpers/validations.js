export const minLength = (rule, value) => {
  const isValid = value.toString().length >= parseInt(rule) ? true : false;
  if (!isValid) {
    return `Please enter a value larger than ${rule}`;
  }
  return true;
};

export const maxLength = (rule, value) => {
  const isValid = value.toString().length <= parseInt(rule) ? true : false;
  if (!isValid) {
    return `Please enter a value smaller than ${rule}`;
  }
  return true;
};

export const email = (rule, value) => {
  const isValid = value.match("@");
  if (!isValid) {
    return `Please enter a valid email`;
  }
  return true;
};

export const required = (rule = true, value) => {
  const isValid = value.toString().length < 0;
  if (!isValid) {
    return `This input is required`;
  }
  return true;
};
