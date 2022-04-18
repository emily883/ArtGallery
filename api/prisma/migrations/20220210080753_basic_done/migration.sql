/*
  Warnings:

  - You are about to drop the column `images` on the `Art` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Art` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Art` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('Pending', 'Approved', 'Delivered');

-- AlterTable
ALTER TABLE "Art" DROP COLUMN "images",
DROP COLUMN "name",
DROP COLUMN "updatedAt";

-- CreateTable
CREATE TABLE "art_images" (
    "id" INTEGER NOT NULL,
    "art_id" INTEGER NOT NULL,

    CONSTRAINT "art_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "OrderStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "art_images" ADD CONSTRAINT "art_images_art_id_fkey" FOREIGN KEY ("art_id") REFERENCES "Art"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
