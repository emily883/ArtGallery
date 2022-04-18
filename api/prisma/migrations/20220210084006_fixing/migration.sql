-- AlterTable
CREATE SEQUENCE "art_id_seq";
ALTER TABLE "Art" ALTER COLUMN "id" SET DEFAULT nextval('art_id_seq');
ALTER SEQUENCE "art_id_seq" OWNED BY "Art"."id";

-- AlterTable
CREATE SEQUENCE "user_id_seq";
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq');
ALTER SEQUENCE "user_id_seq" OWNED BY "User"."id";

-- AlterTable
CREATE SEQUENCE "art_images_id_seq";
ALTER TABLE "art_images" ALTER COLUMN "id" SET DEFAULT nextval('art_images_id_seq');
ALTER SEQUENCE "art_images_id_seq" OWNED BY "art_images"."id";
