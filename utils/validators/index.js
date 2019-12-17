const PATTERN_NON_EMPTY = /\S/;

const RegExpValidator = (regexp, value) => {
  const valid = regexp.test(value);

  return valid;
};

const NonEmptyOrNullValidator = (value) => value && RegExpValidator(PATTERN_NON_EMPTY, value);

module.exports = { NonEmptyOrNullValidator };
