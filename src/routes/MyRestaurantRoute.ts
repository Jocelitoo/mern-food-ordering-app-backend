import express from 'express';
import multer from 'multer';
import MyRestaurantController from '../controllers/MyRestaurantController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyRestaurantRequest } from '../middleware/validation';

export const myRestaurantRoute = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5mb
  },
});

myRestaurantRoute.get(
  '/order',
  jwtCheck,
  jwtParse,
  MyRestaurantController.getMyRestaurantOrders,
);

myRestaurantRoute.patch(
  '/order/:orderId/status',
  jwtCheck,
  jwtParse,
  MyRestaurantController.updateOrderStatus,
);

myRestaurantRoute.get(
  '/',
  jwtCheck,
  jwtParse,
  MyRestaurantController.getMyRestaurant,
);

myRestaurantRoute.post(
  '/',
  upload.single('imageFile'),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  MyRestaurantController.createMyRestaurant,
);

myRestaurantRoute.put(
  '/',
  upload.single('imageFile'),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  MyRestaurantController.updateMyRestaurant,
);
