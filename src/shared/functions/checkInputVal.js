const checkInputVal = value => {
  if (value.includes('\\')) return '';
  if (value.includes('+')) return '';
  if (value.includes('*')) return '';
  if (value.includes('?')) return '';
  if (value.includes('(')) return '';
  if (value.includes(')')) return '';

  return value;
};

export default checkInputVal;
