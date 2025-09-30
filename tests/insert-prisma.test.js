import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it('should be able to insert data', async () => {
    const customer = await prismaClient.customer.create({
      data: {
        name: "Abdurahman",
        phone: "08123456789",
        email: "abdurahman@me.com"
      }
    });
    expect(customer.name).toBe("Abdurahman");
    expect(customer.phone).toBe("08123456789");
    expect(customer.email).toBe("abdurahman@me.com");
  })
  it('should be able to update data', async () => {
    const customerUpdate = await prismaClient.customer.update({
      data: {
        name: "Sky"
      },
      where: {
        id: 4
      }
    })
    expect(customerUpdate.name).toBe("Sky");
  })
})