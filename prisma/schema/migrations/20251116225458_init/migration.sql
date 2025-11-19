-- CreateEnum
CREATE TYPE "HorseStatus" AS ENUM ('SUBMITTED', 'APPROVED', 'ACCEPTED', 'SOLD');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "HorseCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HorseCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HorseDiscipline" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HorseDiscipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HorseGender" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HorseGender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Horse" (
    "id" TEXT NOT NULL,
    "userUid" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pedigree" TEXT,
    "yearOfBirth" INTEGER NOT NULL,
    "genderId" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "disciplineId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "photos" TEXT[],
    "videoUrl" TEXT,
    "vetReport" TEXT,
    "xrayResults" TEXT,
    "status" "HorseStatus" NOT NULL DEFAULT 'SUBMITTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Horse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userUid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFavoriteHorses" (
    "id" TEXT NOT NULL,
    "userUid" TEXT NOT NULL,
    "horseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserFavoriteHorses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserReview" (
    "id" TEXT NOT NULL,
    "userUid" TEXT NOT NULL,
    "reviewer" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "email" TEXT,
    "whatsAppNumber" TEXT,
    "verifiedSeller" BOOLEAN NOT NULL DEFAULT false,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "HorseCategory_name_key" ON "HorseCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "HorseDiscipline_name_key" ON "HorseDiscipline"("name");

-- CreateIndex
CREATE UNIQUE INDEX "HorseGender_name_key" ON "HorseGender"("name");

-- CreateIndex
CREATE INDEX "Horse_status_idx" ON "Horse"("status");

-- CreateIndex
CREATE INDEX "Horse_categoryId_idx" ON "Horse"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "UserFavoriteHorses_userUid_horseId_key" ON "UserFavoriteHorses"("userUid", "horseId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Horse" ADD CONSTRAINT "Horse_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horse" ADD CONSTRAINT "Horse_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "HorseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horse" ADD CONSTRAINT "Horse_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "HorseGender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horse" ADD CONSTRAINT "Horse_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "HorseDiscipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFavoriteHorses" ADD CONSTRAINT "UserFavoriteHorses_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFavoriteHorses" ADD CONSTRAINT "UserFavoriteHorses_horseId_fkey" FOREIGN KEY ("horseId") REFERENCES "Horse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserReview" ADD CONSTRAINT "UserReview_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
