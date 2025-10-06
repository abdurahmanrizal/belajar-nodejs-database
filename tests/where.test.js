import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
  it("should be able to aggreagate query sql", async () => {
    const products = await prismaClient.product.findMany({
      where: {
        OR: [
          {
            name: 'A'
          },
          {
            name: 'B'
          }
        ]
      },
      orderBy: {
        name: 'asc'
      }
    })
    console.info(products);
  }) 
});