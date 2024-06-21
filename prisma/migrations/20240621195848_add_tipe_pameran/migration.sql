/*
  Warnings:

  - You are about to alter the column `tipe_pameran` on the `Pameran` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Pameran` MODIFY `tipe_pameran` ENUM('SENI_RUPA', 'FOTOGRAFI', 'BARANG_ANTIK', 'SENI_BUDAYA') NOT NULL;
