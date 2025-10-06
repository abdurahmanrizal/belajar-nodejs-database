import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
  it("should be able to execute query sql", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "Finance"
      }
    })
    console.info(category);
    expect(category).toHaveProperty('id');
  })
});