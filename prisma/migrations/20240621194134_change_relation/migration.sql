/*
  Warnings:

  - You are about to drop the column `pameran_id` on the `Penyelenggara` table. All the data in the column will be lost.
  - Added the required column `penyelenggara_id` to the `Pameran` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Penyelenggara` DROP FOREIGN KEY `Penyelenggara_pameran_id_fkey`;

-- AlterTable
ALTER TABLE `Pameran` ADD COLUMN `penyelenggara_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Penyelenggara` DROP COLUMN `pameran_id`;

-- AddForeignKey
ALTER TABLE `Pameran` ADD CONSTRAINT `Pameran_penyelenggara_id_fkey` FOREIGN KEY (`penyelenggara_id`) REFERENCES `Penyelenggara`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
