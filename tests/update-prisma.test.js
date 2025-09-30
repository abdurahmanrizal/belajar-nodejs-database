import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it('should be able to update data', async () => {
    const customerUpdate = await prismaClient.customer.update({
      data: {
        name: "Sky Abdurahman"
      },
      where: {
        id: 4
      }
    })
    expect(customerUpdate.name).toBe("Sky Abdurahman");
  })
})