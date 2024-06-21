import express from 'express';
import {
   getAllPameran,
   getPameranById,
   createPameran,
   updatePameran,
   deletePameran,
} from './../controllers/pameran/pameran-controller.js';
import { authenticate } from './../middlewares/auth-middleware.js';

export const pameranRouter = express.Router();

pameranRouter.get('/get/pamerans', getAllPameran);
pameranRouter.get('/get/pameran/:id', getPameranById);
pameranRouter.post('/create/pameran', authenticate, createPameran);
pameranRouter.put('/update/pameran/:id', authenticate, updatePameran);
pameranRouter.delete('/delete/pameran/:id', authenticate, deletePameran);
