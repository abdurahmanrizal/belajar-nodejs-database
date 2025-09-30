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
    const [dataCreate1, dataCreate2] = await prismaClient.$transaction(async () => {
      const abdurahman = await prismaClient.customer.create({
        data: {
          name: "Abdurahman Jack",
          phone: "082221110748",
          email: "abdurahmanjack@me.com"
        }
      })
      const habibie = await prismaClient.customer.create({
        data: {
          name: "Abdurahman Habibie",
          phone: "081225404361",
          email: "abdurahmanhabibie@me.com"
        }
      })
      return [abdurahman, habibie]
    })
    expect(dataCreate1.name).toBe("Abdurahman Jack");
    expect(dataCreate2.name).toBe("Abdurahman Habibie");
  })
})