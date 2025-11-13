/*
  Warnings:

  - You are about to alter the column `name` on the `sample` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `sample` ADD COLUMN `description` TEXT NULL,
    MODIFY `name` VARCHAR(100) NOT NULL;
