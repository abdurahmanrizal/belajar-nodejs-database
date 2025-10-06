import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
  it("should be able insert comment data", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        title: 'Comment 5',
        description: 'Description Comment 5',
        customer_id: 34
      },
      include: {
        customer: true
      }
    })
    console.table(comment);
  })
  it("should be create customer with many customer-comments", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        name: 'Alex',
        email: 'alex@me.com',
        phone: '081225404365',
        comments: {
         createMany: {
          data: [
            {
              title: 'Comment 1',
              description: 'Description Comment 1',
            },
            {
              title: 'Comment 2',
              description: 'Description Comment 2',
            }
          ]
         }
        }
      },
      include: {
        comments: true
      }
    })
    console.info(customer);
  })
  it("should be able to execute find many query customer to many comment sql", async () => {
    const customers = await prismaClient.customer.findMany({
      include: {
        comments: true,
      }
    })
    console.info(customers);
  })
  it("should find some-customer-comments", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: 'Comment 1'
          }
        }
      },
      include: {
        comments: true
      }
    })
    console.info(JSON.stringify(customers));
  })
});