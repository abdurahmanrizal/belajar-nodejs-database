import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
  it("should be able to sorting", async () => {
    const sorting = await prismaClient.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: [
        {
          name: 'desc'
        },
        {
          email: 'asc'
        }
      ]
    })
    console.info(sorting);
  })
})