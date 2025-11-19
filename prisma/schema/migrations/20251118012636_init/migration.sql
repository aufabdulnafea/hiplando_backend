/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `HorseCategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "HorseCategory" DROP COLUMN "imageUrl",
ADD COLUMN     "imageURL" TEXT;
