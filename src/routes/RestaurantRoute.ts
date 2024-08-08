import express from 'express';
import { param } from 'express-validator';
import RestaurantController from '../controllers/RestaurantController';

export const restaurantRoute = express.Router();

restaurantRoute.get(
  '/:restaurantId',
  param('restaurantId')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Parâmetro restaurantId precisa ser uma string válida'),
  RestaurantController.getRestaurant,
);

restaurantRoute.get(
  '/search/:city',
  param('city')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Parâmetro city precisa ser uma string válida'),
  RestaurantController.searchRestaurant,
);
