const UNAUTHORIZE = {
  error: 'unauthorize',
  message: 'Unauthorize',
  detail: 'Current user do not have access to this ressource',
};

const INVALID_TOKEN = {
  error: 'invalid_token',
  message: 'Invalid token',
  detail: 'Validation failed on provided token',
};

const INVALID_TOKEN_FORMAT = {
  error: 'invalid_token_format',
  message: 'Invalid token format',
  detail: 'Format for Authorization: Bearer [token]',
};

const NO_AUTH_HEADER = {
  error: 'no_auth_header',
  message: 'No Authorization found',
  detail: 'Received request is missing Authorization header',
};

module.exports = {
  UNAUTHORIZE,
  INVALID_TOKEN,
  INVALID_TOKEN_FORMAT,
  NO_AUTH_HEADER,
};
