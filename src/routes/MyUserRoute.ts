import express from 'express';
import MyUserController from '../controllers/MyUserController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyUserRequest } from '../middleware/validation';

export const myUserRoute = express.Router();

myUserRoute.get('/', jwtCheck, jwtParse, MyUserController.getCurrentUser);
myUserRoute.post('/', jwtCheck, MyUserController.createCurrentUser);
myUserRoute.put(
  '/',
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  MyUserController.updateCurrentUser,
);
