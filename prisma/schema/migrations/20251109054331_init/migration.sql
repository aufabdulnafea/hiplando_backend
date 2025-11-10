-- CreateTable
CREATE TABLE "HorseCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "HorseDiscipline" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "HorseGender" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "HorsePhoto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "horseId" TEXT NOT NULL,
    CONSTRAINT "HorsePhoto_horseId_fkey" FOREIGN KEY ("horseId") REFERENCES "Horse" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HorseVetReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "horseId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "HorseVetReport_horseId_fkey" FOREIGN KEY ("horseId") REFERENCES "Horse" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HorseXrayResults" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "horseId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "HorseXrayResults_horseId_fkey" FOREIGN KEY ("horseId") REFERENCES "Horse" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Horse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userUid" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pedigree" TEXT,
    "age" INTEGER NOT NULL,
    "genderId" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "disciplineId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "videoUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Horse_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User" ("uid") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Horse_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "HorseCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Horse_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "HorseGender" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Horse_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "HorseDiscipline" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userUid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Notification_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User" ("uid") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserFavoriteHorses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userUid" TEXT NOT NULL,
    "horseId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserFavoriteHorses_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User" ("uid") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserFavoriteHorses_horseId_fkey" FOREIGN KEY ("horseId") REFERENCES "Horse" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserReview" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userUid" TEXT NOT NULL,
    "reviewer" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserReview_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User" ("uid") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "email" TEXT,
    "whatsAppNumber" TEXT,
    "verifiedSeller" BOOLEAN NOT NULL DEFAULT false,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HorseCategory_name_key" ON "HorseCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "HorseDiscipline_name_key" ON "HorseDiscipline"("name");

-- CreateIndex
CREATE UNIQUE INDEX "HorseGender_name_key" ON "HorseGender"("name");

-- CreateIndex
CREATE UNIQUE INDEX "HorseVetReport_horseId_key" ON "HorseVetReport"("horseId");

-- CreateIndex
CREATE UNIQUE INDEX "HorseXrayResults_horseId_key" ON "HorseXrayResults"("horseId");

-- CreateIndex
CREATE INDEX "Horse_status_idx" ON "Horse"("status");

-- CreateIndex
CREATE INDEX "Horse_categoryId_idx" ON "Horse"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "UserFavoriteHorses_userUid_horseId_key" ON "UserFavoriteHorses"("userUid", "horseId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
