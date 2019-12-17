const Offer = require('../models/Offer');
const OfferErrors = require('../errors/OfferErrors');
const BaseErrors = require('../errors/BaseErrors');

const Validators = require('../../utils/validators');

const OfferController = () => {
  const create = async (req, res) => {
    const { title, content } = req.body;
    const { NonEmptyOrNullValidator } = Validators;

    if (NonEmptyOrNullValidator(title) && NonEmptyOrNullValidator(content)) {
      try {
        const offer = await Offer.create({
          title,
          content,
        });

        if (!offer) {
          return res.status(404).json(OfferErrors.OFFER_NOT_FOUND);
        }

        return res.status(201).json({ offer });
      } catch (err) {
        console.error(err);

        return res.status(500).json(BaseErrors.INTERNAL_ERROR);
      }
    }
    return res.status(400).json(OfferErrors.TITLE_CONTENT_EMPTY);
  };

  const getAll = async (req, res) => {
    try {
      const offers = await Offer.findAll();

      if (!offers) {
        return res.status(404).json(OfferErrors.OFFER_NOT_FOUND);
      }

      return res.status(200).json({ offers });
    } catch (err) {
      console.error(err);

      return res.status(500).json(BaseErrors.INTERNAL_ERROR);
    }
  };

  const get = async (req, res) => {
    const { id } = req.params;

    try {
      const offer = await Offer.findByPk(id);

      if (!offer) {
        return res.status(404).json(OfferErrors.OFFER_NOT_FOUND);
      }

      return res.status(200).json({ offer });
    } catch (err) {
      console.error(err);

      return res.status(500).json(BaseErrors.INTERNAL_ERROR);
    }
  };

  const update = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const { NonEmptyOrNullValidator } = Validators;

    if (NonEmptyOrNullValidator(title) || NonEmptyOrNullValidator(content)) {
      try {
        const offer = await Offer.findByPk(id);

        if (!offer) {
          return res.status(404).json(OfferErrors.OFFER_NOT_FOUND);
        }

        const updatedOffer = await offer.update({
          ...(title ? { title } : {}),
          ...(content ? { content } : {}),
        });

        return res.status(200).json({ updatedOffer });
      } catch (err) {
        console.error(err);

        return res.status(500).json(BaseErrors.INTERNAL_ERROR);
      }
    }
    return res.status(400).json(OfferErrors.TITLE_CONTENT_BOTH_BLANK);
  };

  const updateOrCreate = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const { NonEmptyOrNullValidator } = Validators;

    if (NonEmptyOrNullValidator(title) && NonEmptyOrNullValidator(content)) {
      try {
        const offer = await Offer.findCreateFind({ where: { id } });

        if (!offer[0]) {
          return res.status(404).json(OfferErrors.OFFER_NOT_FOUND);
        }

        const updatedOffer = await offer[0].update({
          title,
          content,
        });

        return res.status(200).json({ updatedOffer });
      } catch (err) {
        console.error(err);

        return res.status(500).json(BaseErrors.INTERNAL_ERROR);
      }
    }
    return res.status(400).json(OfferErrors.TITLE_CONTENT_EMPTY);
  };

  const destroy = async (req, res) => {
    const { id } = req.params;

    try {
      const offer = await Offer.findByPk(id);

      if (!offer) {
        return res.status(404).json(OfferErrors.OFFER_NOT_FOUND);
      }

      await offer.destroy();

      return res.status(204).send();
    } catch (err) {
      console.error(err);

      return res.status(500).json(BaseErrors.INTERNAL_ERROR);
    }
  };

  return {
    create,
    getAll,
    get,
    update,
    updateOrCreate,
    destroy,
  };
};

module.exports = OfferController;
