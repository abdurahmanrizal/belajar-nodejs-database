import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
  it('create data likes many to many relation', async () => {
    const like = await prismaClient.like.create({
      data: {
        customer_id: 8,
        product_id: "P001"
      },
      include: {
        customer: true,
        product: true
      }
    });
    console.info(like);
  })
  it("find unique likes", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: 8
      },
      include: {
        likes: {
          include: {
            product: true
          }
        }
      }
    })
    console.info(JSON.stringify(customer));
  })
  it("find many likes product contain A", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: "A"
              }
            }
          }
        }
      },
      include: {
        likes: {
          include: {
            product: true
          }
        }
      }
    })
    console.info(JSON.stringify(customers));
  })
  it("create data to implicit relation", async() => {
    const customer = await prismaClient.customer.update({
      where: {
        id: 8
      },
      data: {
        loves: {
          connect: [
            {
              id: "P001"
            },
            {
              id: "P002"
            }
          ]
        }
      },
      include: {
        loves: true
      }
    })
    console.info(customer);
  });
  it("implicit relation find many", async() => {
    const customer = await prismaClient.customer.findMany({
      where: {
        loves: {
          some: {
            name: {
              contains: "A"
            }
          }
        }
      },
      include: {
        loves: true
      }
    })
    console.info(JSON.stringify(customer));
  })
})