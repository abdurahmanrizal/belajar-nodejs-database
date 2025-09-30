import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it('should be able to delete data', async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: 4
      }
    })
    expect(customer.name).toBe("Sky Abdurahman");
    expect(customer.id).toBe(4);
    expect(customer.email).toBe("abdurahman@me.com");
    expect(customer.phone).toBe("08123456789");
  })
})