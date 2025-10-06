import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to count query sql", async () => {
     const total = await prismaClient.customer.count({
      where: {
        name: 'Abdurahman'
      }
     });
     expect(total).toBe(2);
  })
});