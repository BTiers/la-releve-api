const INTERNAL_ERROR = {
  error: 'internal_error',
  message: 'A server error occured',
  detail: 'An error occured on our end, please refer to **whatever link to issues**',
};

const NOT_IMPLEMENTED = {
  error: 'not_implemented',
  message: 'Not implemented',
  detail: 'This feature is not implemented yet',
};

module.exports = { INTERNAL_ERROR, NOT_IMPLEMENTED };
