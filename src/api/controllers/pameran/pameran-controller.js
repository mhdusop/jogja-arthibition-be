import { PrismaClient, TipePameran } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllPameran = async (req, res) => {
   try {
      const pamerans = await prisma.pameran.findMany({
         include: { penyelenggara: true },
      });
      res.json(pamerans);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const getPameranById = async (req, res) => {
   const { id } = req.params;
   try {
      const pameran = await prisma.pameran.findUnique({
         where: { id: parseInt(id) },
         include: { penyelenggara: true },
      });
      if (!pameran) {
         return res.status(404).json({ error: 'Pameran not found' });
      }
      res.json(pameran);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const createPameran = async (req, res) => {
   const { nama_pameran, tgl_mulai_pameran, tgl_berakhir_pameran, alamat_pameran, tipe_pameran, penyelenggara_id } = req.body;
   try {
      const newPameran = await prisma.pameran.create({
         data: {
            nama_pameran,
            tgl_mulai_pameran: new Date(tgl_mulai_pameran),
            tgl_berakhir_pameran: tgl_berakhir_pameran ? new Date(tgl_berakhir_pameran) : null,
            alamat_pameran,
            tipe_pameran: TipePameran[tipe_pameran.toUpperCase()],
            penyelenggara_id: parseInt(penyelenggara_id),
         },
      });
      res.status(201).json(newPameran);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const updatePameran = async (req, res) => {
   const { id } = req.params;
   const { nama_pameran, tgl_mulai_pameran, tgl_berakhir_pameran, alamat_pameran, tipe_pameran, penyelenggara_id } = req.body;
   try {
      const updatedPameran = await prisma.pameran.update({
         where: { id: parseInt(id) },
         data: {
            nama_pameran,
            tgl_mulai_pameran: new Date(tgl_mulai_pameran),
            tgl_berakhir_pameran: tgl_berakhir_pameran ? new Date(tgl_berakhir_pameran) : null,
            alamat_pameran,
            tipe_pameran: TipePameran[tipe_pameran.toUpperCase()],
            penyelenggara_id: parseInt(penyelenggara_id),
         },
      });
      res.json(updatedPameran);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const deletePameran = async (req, res) => {
   const { id } = req.params;
   try {
      await prisma.pameran.delete({ where: { id: parseInt(id) } });

      res.status(200).send({
         message: "Pameran Deleted"
      });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
