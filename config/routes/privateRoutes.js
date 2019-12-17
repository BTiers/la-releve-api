const privateRoutes = {
  /* Offers */
  /*
   * @desc Get all offers
   * @param none
   * @return [Offer] - Array of retrieved offers
   */
  'GET /offers': 'OfferController.getAll',
  /*
   * @desc Get an offer by id
   * @param int $id (Required) - The offer ID you want to retrieve
   * @return Offer - The selected offer
   */
  'GET /offers/:id': 'OfferController.get',
  /*
   * @desc Create a new offer
   * @body string $title (Required)- Offer's title
   * @body string $content (Required)- Offer's content
   * @return Offer - The newly created offer
   */
  'POST /offers': 'OfferController.create',
  /*
   * @desc Update if exist or create a new offer
   * @param int $id (Required) - The offer ID you want to retrieve
   * @body string $title (Required)- Offer's title
   * @body string $content (Required)- Offer's content
   * @return Offer - The newly created offer
   */
  'PUT /offers/:id': 'OfferController.updateOrCreate',
  /*
   * @desc Update an existing offer
   * @param int $id (Required) - The offer ID you want to retrieve
   * @body string $title (Optional)- Offer's title, optional if content is provided
   * @body string $content (Optional)- Offer's content, optional if title is provided
   * @return Offer - The updated offer
   */
  'PATCH /offers/:id': 'OfferController.update',
  /*
   * @desc Delete an offer
   * @param int $id (Required) - The offer ID you want to delete
   * @return 204 - No Content
   */
  'DELETE /offers/:id': 'OfferController.destroy',


  /* Users */
  /*
   * @desc Get current user's offers
   * @param none
   * @return 204 - No Content
   */
  'GET /users/offers': 'UserController.getOffers',
  /*
   * @desc Add an offer to the current user
   * @body int $id (Required) - The offer ID you want to delete
   * @return 204 - No Content
   */
  'POST /users/offers': 'UserController.addOffer',
  /*
   * @desc Delete the ownership of an offer to the current user
   * @param int $id (Required) - The offer ID you want to remove from the user
   * @return [Offer] The new offers own by the user
   */
  'DELETE /users/offers/:id': 'UserController.removeOffer',
};

module.exports = privateRoutes;
