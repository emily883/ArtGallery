/*
  Warnings:

  - Added the required column `image_url` to the `art_images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "art_images" ADD COLUMN     "image_url" TEXT NOT NULL;
