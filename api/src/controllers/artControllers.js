const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function Art() {}

Art.prototype.all = async () => {
  return await prisma.art.findMany({
      include: {
        category: true,
        images: true
      }
  });
};

Art.prototype.get = async (id) => {
  return await prisma.art.findUnique({
    where: {
      id: parseInt(`${id}`),
    },
    include: {
      category: true,
      images: true
    }
  })
}


module.exports = Art;
