import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  return await prisma.productType.createMany({
    data: [
      {
        productType: "E-commerce products",
      },
      {
        productType: "My personal belongings",
      },
      {
        productType: "Materials for manufacturing",
      },
      {
        productType: "Items being sold at in-person locations",
      },
      {
        productType: "Hardware",
      },
      {
        productType: "Clothing, shoes, bags, accessories, etc.",
      },
      {
        productType: "Items to rent out",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
