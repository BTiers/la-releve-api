const INVALID_CREDENTIALS = {
  error: 'invalid_credentials',
  message: 'Incorrect email and/or password',
  detail: 'Ensure that email and password included in the request are correct',
};

const PASSWORDS_MISMATCH = {
  error: 'passwords_mismatch',
  message: 'Passwords mismatch',
  detail: 'Ensure that both password and password validation included in the request are the same',
};

const EMAIL_TAKEN = {
  error: 'email_taken',
  message: 'Email already taken',
  detail: 'Email already taken',
};

const USER_NOT_FOUND = {
  error: 'user_not_found',
  message: 'User not found',
  detail: 'User not found',
};

const OFFER_ALREADY_OWN = {
  error: 'offer_already_own',
  message: 'Forbidden',
  detail: 'Current user cannot acquire this offer as it is already own by someone else',
};

module.exports = {
  INVALID_CREDENTIALS,
  PASSWORDS_MISMATCH,
  EMAIL_TAKEN,
  USER_NOT_FOUND,
  OFFER_ALREADY_OWN,
};
