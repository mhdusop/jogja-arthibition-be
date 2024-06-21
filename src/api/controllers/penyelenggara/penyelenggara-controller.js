import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllPenyelenggara = async (req, res) => {
   try {
      const penyelenggaras = await prisma.penyelenggara.findMany({ include: { Pameran: true } });
      res.json(penyelenggaras);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const getPenyelenggaraById = async (req, res) => {
   const { id } = req.params;
   try {
      const penyelenggara = await prisma.penyelenggara.findUnique({ where: { id: parseInt(id) }, include: { Pameran: true } });
      if (!penyelenggara) {
         return res.status(404).json({ error: 'Penyelenggara not found' });
      }
      res.json(penyelenggara);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const createPenyelenggara = async (req, res) => {
   const { nama_penyelenggara, image_penyelenggara } = req.body;
   try {
      const newPenyelenggara = await prisma.penyelenggara.create({
         data: {
            nama_penyelenggara,
            image_penyelenggara,
         },
      });
      res.status(201).json(newPenyelenggara);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const updatePenyelenggara = async (req, res) => {
   const { id } = req.params;
   const { nama_penyelenggara, image_penyelenggara } = req.body;
   try {
      const updatedPenyelenggara = await prisma.penyelenggara.update({
         where: { id: parseInt(id) },
         data: {
            nama_penyelenggara,
            image_penyelenggara,
         },
      });
      res.json(updatedPenyelenggara);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};