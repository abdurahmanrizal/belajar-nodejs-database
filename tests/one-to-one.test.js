import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
  it("should be able to execute one to one query sql", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        balance: 10000,
        customer_id: 8
      },
      include: {
        customer: true
      }
    })
    console.info(wallet);
  })
  it("should be able to execute one to one query customer sql", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        name: "Joko Widodo",
        phone: "0812345678912",
        email: "jokowidodo@me.com",
        wallet: {
          create: {
            balance: 10_000,
          }
        }
      },
      include: {
        wallet: true
      },
    })
    console.info(customer);
  })
  it("should be able to execute find one to one query customer sql", async () => {
    const customer = await prismaClient.customer.findUnique({
    // const customer = await prismaClient.customer.findMany({
      where: {
        // name: {
        //   endsWith: "Widodo"
        // }
        id: 34
      },
      include: {
        wallet: true
      }
    })
    console.info(customer);
  })
  it("should be able to execute find many query customer sql", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        wallet: {
           isNot: null
        }
      },
      include: {
        wallet: true
      }
    })
    console.info(customers);
  })
});