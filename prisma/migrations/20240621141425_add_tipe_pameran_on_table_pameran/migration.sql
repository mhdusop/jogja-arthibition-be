/*
  Warnings:

  - You are about to drop the column `tgl_berakhir` on the `Pameran` table. All the data in the column will be lost.
  - You are about to drop the column `tgl_mulai` on the `Pameran` table. All the data in the column will be lost.
  - You are about to drop the column `image_profile` on the `Penyelenggara` table. All the data in the column will be lost.
  - Added the required column `tgl_mulai_pameran` to the `Pameran` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipe_pameran` to the `Pameran` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_penyelenggara` to the `Penyelenggara` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pameran` DROP COLUMN `tgl_berakhir`,
    DROP COLUMN `tgl_mulai`,
    ADD COLUMN `tgl_berakhir_pameran` DATETIME(3) NULL,
    ADD COLUMN `tgl_mulai_pameran` DATETIME(3) NOT NULL,
    ADD COLUMN `tipe_pameran` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Penyelenggara` DROP COLUMN `image_profile`,
    ADD COLUMN `image_penyelenggara` VARCHAR(191) NOT NULL;
