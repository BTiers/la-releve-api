const auth0001 = {
  error: 'auth_0001',
  message: 'Unauthorize',
  detail: 'Current user do not have access to this ressource',
};

const auth0002 = {
  error: 'auth_0002',
  message: 'Invalid token',
  detail: 'Validation failed on provided token',
};

const auth0003 = {
  error: 'auth_0003',
  message: 'Invalid token format',
  detail: 'Format for Authorization: Bearer [token]',
};

const auth0004 = {
  error: 'auth_0004',
  message: 'No Authorization found',
  detail: 'Received request is missing Authorization header',
};

module.exports = {
  auth0001,
  auth0002,
  auth0003,
  auth0004,
};
