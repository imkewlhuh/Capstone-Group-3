import { Router } from "express";
import { prisma } from "../db/index.js";

const router = new Router();

router.get("/", async (_req, res) => {
  const productTypeList = await prisma.productType.findMany();

  const remappedList = productTypeList.map((productType) => ({
    value: productType.id,
    label: productType.productType,
  }));

  res.status(200).json({
    success: true,
    productTypeList: remappedList,
  });
});

export default router;
