const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const axios = require("axios");

function getRandomArbitrary(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

async function main() {
  // const artes = await axios.get(
  //   "https://openaccess-api.clevelandart.org/api/artworks/?limit=50"
  // );
  // for (let i = 0; i < artes.data.data.length; i++) {
  //   // console.log(
  //   //   artes.data.data[i].images
  //   //     ? artes.data.data[i].images.web
  //   //     : "https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg"
  //   // );
  //   const art = await prisma.art.create({
  //     data: {
  //       title: artes.data.data[i].title,
  //       author: artes.data.data[i].creditline,
  //       description:
  //         artes.data.data[i].digital_description ||
  //         artes.data.data[i].wall_description,
  //       price: getRandomArbitrary(5.2, 100.85),
  //       images: {
  //         create: {
  //           image_url: artes.data.data[i].images
  //             ? artes.data.data[i].images.web.url
  //             : "https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg",
  //         },
  //       },
  //       stock: 1,
  //       category: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //       rating: getRandomArbitrary(1, 5),
  //     },
  //   });
  // }

  // const getUser = await prisma.user.update({
  //   where: {
  //     id: 9
  //   },
  //   data: {
  //     posts: {
  // |      connect: {
  // |        id: 11
  // |      },
  //       create: {
  //         title: "My new post title"
  //       }
  //     }
  //   }
  // })

  // creacion de una categoria
  //   const categoria = await prisma.art_category.create({
  //     data: {
  //       name: "Drawing",
  //       description: "Drawing Art",
  //     },
  //   });
  //   console.log(categoria);

  // agregando una obra
  // const art = await prisma.art.create({
  //     data: {
  //         title: "el cielo",
  //         author: "Julianys",
  //         description: "el cielo",
  //         price: 100.00,
  //         stock: 1,
  //         category: {
  //             connect: {
  //                 id : 1
  //             }
  //         }
  //     }
  // })
  // console.log(art, "art");

  // _______________________________________________________________
  // const categorias = await prisma.art_category.findMany({
  //     where: {
  //         id: 1
  //     }
  // })
  // console.log(categorias, "categorias");

  // const arte = await prisma.art.findMany({
  //     where: {
  //         id: 1
  //     },
  //     include: {
  //         category: true
  //     }
  // })
  // console.log(arte, "categoriasConObra");

  //creando un usuario
  // const usuario = await prisma.user.create({
  //   data: {
  //     username: "julianys18",
  //     name: "julianys",
  //     email: "julianyssantiago921@gmail.com",
  //     password: "123456",
  //     admin: false
  //   }
  // })

  // encontrar un objeto

  const getArt = await prisma.user.findUnique({
    where: {
      id: 32,
    },
    include: {
      category: true,
      images: true
    }
  })


}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
