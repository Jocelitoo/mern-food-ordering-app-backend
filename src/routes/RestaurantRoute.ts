import express from 'express';
import { param } from 'express-validator';
import RestaurantController from '../controllers/RestaurantController';

export const restaurantRoute = express.Router();

restaurantRoute.get(
  '/search/:city',
  param('city')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Parâmetro city precisa uma string válida'),
  RestaurantController.searchRestaurant,
);
