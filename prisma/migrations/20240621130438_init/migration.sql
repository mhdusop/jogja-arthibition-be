-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pameran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pameran` VARCHAR(191) NOT NULL,
    `tgl_mulai` DATETIME(3) NOT NULL,
    `tgl_berakhir` DATETIME(3) NULL,
    `alamat_pameran` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Penyelenggara` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_penyelenggara` VARCHAR(191) NOT NULL,
    `image_profile` VARCHAR(191) NOT NULL,
    `pameran_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Penyelenggara` ADD CONSTRAINT `Penyelenggara_pameran_id_fkey` FOREIGN KEY (`pameran_id`) REFERENCES `Pameran`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
