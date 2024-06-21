import jwt from 'jsonwebtoken';
import config from './../../config/config.js';

export const authenticate = (req, res, next) => {
   const token = req.header('Authorization')?.replace('Bearer ', '');

   if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
   }

   try {
      const decoded = jwt.verify(token, config.JWT_SECRET);
      req.user = decoded;
      next();
   } catch (error) {
      res.status(400).json({ error: 'Invalid token.' });
   }
};