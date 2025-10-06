import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
  it("should be able to aggreagate query sql", async () => {
    const result = await prismaClient.product.aggregate({
      _min: {
        price: true
      },
      _max: {
        price: true
      },
      _avg: {
        price: true
      }
    })
    console.info(result);
    expect(result._min.price).toBe(1000);
    expect(result._max.price).toBe(5000);
    expect(result._avg.price).toBe(3000);
  })
  it("should be able to aggreagate query sql with group by", async () => {
    const result = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
        stock: true
      },
      _max: {
        price: true,
        stock: true
      },
      _avg: {
        price: true,
        stock: true
      }
    })
    console.info(result);
  })
  it("should be able to aggreagate query sql with group by and having", async () => {
    const result = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
        stock: true
      },
      _max: {
        price: true,
        stock: true
      },
      _avg: {
        price: true,
        stock: true
      },
      having: {
        price: {
          _avg: {
            gt: 100
          }
        }
      }
    })
    console.info(result);
  })
});