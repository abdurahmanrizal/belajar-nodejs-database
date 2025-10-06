import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  // it('should be able to delete data with sequential transaction', async () => {
  //   const [dataCreate1, dataCreate2] = await prismaClient.$transaction([
  //     prismaClient.customer.create({
  //       data: {
  //         name: "Abdurahman Jack",
  //         phone: "082221110748",
  //         email: "abdurahmanjack@me.com"
  //       }
  //     }),
  //     prismaClient.customer.create({
  //       data: {
  //         name: "Abdurahman Habibie",
  //         phone: "081225404361",
  //         email: "abdurahmanhabibie@me.com"
  //       }
  //     })
  //   ])
  //   expect(dataCreate1.name).toBe("Abdurahman Jack");
  //   expect(dataCreate2.name).toBe("Abdurahman Habibie");
  // })
  it('should be able to delete data with interactive transaction', async () => {
    const [dataCreate1, dataCreate2] = await prismaClient.$transaction(async (prisma) => {
      const abdurahman = await prisma.customer.create({
        data: {
          name: "Abdurahman Jack1",
          phone: "08222111074811",
          email: "abdurahmanjack1@me.com"
        }
      })
      const habibie = await prisma.customer.create({
        data: {
          name: "Abdurahman Habibie1",
          phone: "0812254043611",
          email: "abdurahmanhabibie1@me.com"
        }
      })
      return [abdurahman, habibie]
    })
    expect(dataCreate1.name).toBe("Abdurahman Jack1");
    expect(dataCreate2.name).toBe("Abdurahman Habibie1");
  })
})