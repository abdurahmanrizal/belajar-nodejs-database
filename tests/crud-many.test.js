import { prismaClient } from "../src/prisma-client.js";
describe("Prisma Client", () => {
  it("should be can create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          name: "Abdurahman Jack4",
          phone: "08222111074814",
          email: "abdurahmanjack4@me.com"
        },
        {
          name: "Abdurahman Jack5",
          phone: "08222111074815",
          email: "abdurahmanjack5@me.com"
        }
      ]
    })
    expect(count).toBe(2);
  })
  it("should be can update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: 'abdurahmanlagi@me.com'
      },
      where: {
        name: 'Abdurahman Jack'
      }
    });
    expect(count).toBe(1);
  })
  it("should be can delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: 'Tidak Ada'
      }
    });
    expect(count).toBe(0);
  })
  it("should be can read many records", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        name: 'Abdurahman'
      }
    });
    expect(customers.length).toBe(2);
  })
})