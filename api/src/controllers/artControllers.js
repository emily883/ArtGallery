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



module.exports = Art;
