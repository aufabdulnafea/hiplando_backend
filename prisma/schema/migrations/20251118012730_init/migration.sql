/*
  Warnings:

  - Made the column `imageURL` on table `HorseCategory` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "HorseCategory" ALTER COLUMN "imageURL" SET NOT NULL;
