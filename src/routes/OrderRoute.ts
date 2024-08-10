import express from 'express';
import { jwtCheck, jwtParse } from '../middleware/auth';
import OrderController from '../controllers/OrderController';

export const orderRoute = express.Router();

orderRoute.get('/', jwtCheck, jwtParse, OrderController.getMyOrders);

orderRoute.post(
  '/checkout/create-checkout-session',
  jwtCheck,
  jwtParse,
  OrderController.createCheckoutSession,
);

orderRoute.post('/checkout/webhook', OrderController.stripeWebhookHandler);
