import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from './../../../config/config.js';

const prisma = new PrismaClient();

export const register = async (req, res) => {
   const { fullname, username, email, password, confirmPassword } = req.body;

   if (!fullname || !username || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: 'All fields are required.' });
   }

   if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match.' });
   }

   try {
      const existingUser = await prisma.user.findUnique({
         where: { email },
      });

      if (existingUser) {
         return res.status(400).json({ error: 'Email already in use.' });
      }

      const existingUsername = await prisma.user.findUnique({
         where: { username },
      });

      if (existingUsername) {
         return res.status(400).json({ error: 'Username already taken.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
         data: {
            fullname,
            username,
            email,
            password: hashedPassword,
         },
      });
      res.status(201).json({ message: 'User registered successfully', data: user });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const login = async (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
   }

   try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
         return res.status(400).json({ error: 'Invalid email or password.' });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
         return res.status(400).json({ error: 'Invalid email or password.' });
      }

      const token = jwt.sign({ userId: user.id }, config.JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Login successful', token, user: { id: user.id, fullname: user.fullname, email: user.email, username: user.username } });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};