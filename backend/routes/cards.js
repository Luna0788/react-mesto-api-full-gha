const cardRouter = require('express').Router();

const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

const { validationCreateCard, validationCardId } = require('../middlewares/validation');

cardRouter.get('/', getCards);
cardRouter.post('/', validationCreateCard, createCard);
cardRouter.delete('/:cardId', validationCardId, deleteCard);
cardRouter.put('/:cardId/likes', validationCardId, likeCard);
cardRouter.delete('/:cardId/likes', validationCardId, dislikeCard);

module.exports = cardRouter;
