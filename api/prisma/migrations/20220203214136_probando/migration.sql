/*
  Warnings:

  - A unique constraint covering the columns `[category_id]` on the table `Art` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Art_category_id_key" ON "Art"("category_id");
