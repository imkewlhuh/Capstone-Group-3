import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();
async function main() {
  const newBusiness = await prisma.business.create({
    data: {
      name: "Some Business",
      type: "business",
    }
  });
 await prisma.itemList.create({
    data: {
      name: "Electronics",
      count: 2,
      businessId: newBusiness.id,
      item: {
        createMany: {
          data: [
            {
              name: "Beats Headphones",
              images: "https://placehold.co/100",
              price: 250.00,
              SKU: 123
            },
            {
              name: "iPhone 11",
              images: "https://placehold.co/100",
              price: 1200.00,
              SKU: 1080
            },
          ]
        }
      }
    }
  })
  await prisma.productType.createMany({
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
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });





