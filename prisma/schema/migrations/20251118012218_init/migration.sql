/*
  Warnings:

  - You are about to drop the column `videoUrl` on the `Horse` table. All the data in the column will be lost.
  - The `pedigree` column on the `Horse` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Horse" DROP COLUMN "videoUrl",
ADD COLUMN     "pedigreeURL" TEXT,
ADD COLUMN     "videoURL" TEXT,
DROP COLUMN "pedigree",
ADD COLUMN     "pedigree" JSONB;
