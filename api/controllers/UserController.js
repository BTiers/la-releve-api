const User = require('../models/User');
const Offer = require('../models/Offer');

const UserErrors = require('../errors/UserErrors');
const OfferErrors = require('../errors/OfferErrors');
const AuthErrors = require('../errors/AuthErrors');
const BaseErrors = require('../errors/BaseErrors');

const Validators = require('../../utils/validators');

const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');

const UserController = () => {
  const register = async (req, res) => {
    const { password, password2, email } = req.body;
    const { NonEmptyOrNullValidator } = Validators;

    if (NonEmptyOrNullValidator(password) && NonEmptyOrNullValidator(email)) {
      if (password === password2) {
        try {
          const user = await User.create({
            email,
            password,
          });
          const token = authService().issue({ id: user.id });

          return res.status(201).json({ token, user });
        } catch (err) {
          return res.status(400).json(UserErrors.EMAIL_TAKEN);
        }
      }
      return res.status(400).json(UserErrors.PASSWORDS_MISMATCH);
    }
    return res.status(400).json(UserErrors.INVALID_CREDENTIALS);
  };

  const login = async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      try {
        const user = await User.findOne({ where: { email } });

        if (!user) return res.status(404).json(UserErrors.USER_NOT_FOUND);

        if (bcryptService().comparePassword(password, user.password)) {
          const token = authService().issue({ id: user.id });

          return res.status(200).json({ token, user });
        }

        return res.status(401).json(AuthErrors.UNAUTHORIZE);
      } catch (err) {
        console.log(err);
        return res.status(400).json(BaseErrors.INTERNAL_ERROR);
      }
    }

    return res.status(400).json(UserErrors.INVALID_CREDENTIALS);
  };

  const getOffers = async (req, res) => {
    const { token: { id: userId } } = req;

    try {
      const user = await User.findByPk(userId);

      if (!user) return res.status(404).json(UserErrors.USER_NOT_FOUND);

      const offers = await user.getOffers();
      return res.status(200).json(offers);
    } catch (err) {
      console.log(err);
      return res.status(400).json(BaseErrors.INTERNAL_ERROR);
    }
  };

  const addOffer = async (req, res) => {
    const { body: { id }, token: { id: userId } } = req;

    if (id) {
      try {
        const offer = await Offer.findByPk(id);

        if (!offer) return res.status(404).json(OfferErrors.OFFER_NOT_FOUND);
        if (offer.UserId !== null) return res.status(403).json(UserErrors.OFFER_ALREADY_OWN);

        const user = await User.findByPk(userId);
        await user.addOffer(offer);

        return res.status(200).json(user);
      } catch (err) {
        console.log(err);
        return res.status(400).json(BaseErrors.INTERNAL_ERROR);
      }
    }
    return res.status(400).json(OfferErrors.OFFER_NOT_FOUND);
  };

  const removeOffer = async (req, res) => {
    const { params: { id }, token: { id: userId } } = req;

    if (id) {
      try {
        const paramId = parseInt(id, 10);
        const user = await User.findByPk(userId);
        const associatedOffer = await user.getOffers({ where: { id } });

        if (!associatedOffer[0]) return res.status(404).json(OfferErrors.OFFER_NOT_FOUND);

        const associatedOffers = await user.getOffers();
        const mutateAssociatedOffers = associatedOffers.filter((offer) => offer.id !== paramId);

        user.setOffers(mutateAssociatedOffers);

        return res.status(200).json(mutateAssociatedOffers);
      } catch (err) {
        console.log(err);
        return res.status(400).json(BaseErrors.INTERNAL_ERROR);
      }
    }
    return res.status(404).json(OfferErrors.OFFER_NOT_FOUND);
  };

  return {
    register,
    login,
    addOffer,
    getOffers,
    removeOffer,
  };
};

module.exports = UserController;
