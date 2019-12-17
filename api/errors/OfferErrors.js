const TITLE_CONTENT_EMPTY = {
  error: 'title_content_empty',
  message: 'Title and/or content cannot be blank',
  detail: 'Ensure that both title and content included in the request are correct',
};

const OFFER_NOT_FOUND = {
  error: 'offer_not_found',
  message: 'Offer not found',
  detail: 'Offer not found',
};

const TITLE_CONTENT_BOTH_BLANK = {
  error: 'title_content_both_blank',
  message: 'Title and content cannot be both blank',
  detail: 'Ensure that either title or content included in the request are correct',
};

module.exports = {
  TITLE_CONTENT_EMPTY,
  OFFER_NOT_FOUND,
  TITLE_CONTENT_BOTH_BLANK,
};
