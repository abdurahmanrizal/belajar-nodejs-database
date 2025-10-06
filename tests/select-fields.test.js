import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
  it("should be able to select fields on create", async () => {
    const createCustomer = await prismaClient.customer.create({
      data: {
        name: "Abdurahman Lagi",
        phone: "0812345678911",
        email: "abdurahmanlag2@me.com"
      },
      select: {
        name: true,
        email: true
      }
    })
    expect(createCustomer.name).toBe("Abdurahman Lagi");
    expect(createCustomer.email).toBe("abdurahmanlag2@me.com");
    expect(createCustomer.phone).toBeUndefined();
  })
  it("should be find many with select", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        name: true,
        email: true
      }
    })
    for (let customer of customers) {
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeDefined();
      expect(customer.phone).toBeUndefined();
    }
  })
})