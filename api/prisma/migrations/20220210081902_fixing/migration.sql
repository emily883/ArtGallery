/*
  Warnings:

  - A unique constraint covering the columns `[art_id]` on the table `art_images` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "art_images_art_id_key" ON "art_images"("art_id");
