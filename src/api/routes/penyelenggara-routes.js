import express from 'express';
import {
   getAllPenyelenggara,
   getPenyelenggaraById,
   createPenyelenggara,
   updatePenyelenggara,
} from './../controllers/penyelenggara/penyelenggara-controller.js';
import { authenticate } from './../middlewares/auth-middleware.js';

export const penyelenggaraRouter = express.Router();

penyelenggaraRouter.get('/get/penyelenggaras', getAllPenyelenggara);
penyelenggaraRouter.get('/get/penyelenggara/:id', getPenyelenggaraById);
penyelenggaraRouter.post('/create/penyelenggara', authenticate, createPenyelenggara);
penyelenggaraRouter.put('/update/penyelenggara/:id', authenticate, updatePenyelenggara);
