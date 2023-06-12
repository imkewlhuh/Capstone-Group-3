import express from "express";
import { prisma } from "../db/index.js";

export default function itemRouter(passport) {
  const router = express.Router();

  //Create Item
  router.post(
    "/new",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      try {
        const newItem = await prisma.item.create({
          data: {
            SKU: req.body.SKU,
            expDate: req.body.expDate,
            listId: req.body.listId,
          },
        });

        if (newItem) {
          res.status(201).json({
            success: true,
            message: "Successfully added item"
          });
        };
      } catch (e) {
        res.status(500).json({
          success: false,
          message: "Failed to add item",
        });
      };
    }
  );

  //Update Item by SKU
  router.put(
    "/:SKU",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      const SKU = req.params.SKU;

      const editItem = await prisma.item.update({
        where: {
          SKU: Number(SKU),
        },
        data: {
          SKU: req.body.SKU,
          expDate: req.body.expDate,
          listId: req.body.listId,
        },
      });

      res.status(200).json({
        success: true,
        editItem,
      });
    }
  );

  //Delete item by SKU
  router.delete(
    "/:SKU",
    passport.authenticate("jwt", { session: false }),

    async function (request, response) {
      const SKU = parseInt(request.params.SKU);
      try {
        await prisma.item.delete({
          where: {
            SKU: SKU,
          },
        });

        response.status(200).json({
          success: true,
        });
      } catch (e) {
        console.log(e);
        if (e.code == "P2025") {
          response.status(404).json({
            success: false,
          });
        } else {
          response.status(500).json({
            success: false,
          });
        };
      };
    }
  );

  //Get All Items
  router.get("/", async (_req, res) => {
    try {
      const items = await prisma.item.findMany({
        orderBy: {
          listId: "asc",
        },
      });

      if (items) {
        res.status(200).json({
          success: true,
          items,
        });
      }
    } catch (e) {
      res.status(500).json({
        success: false,
        message: "Could not find items",
      });
    }
  });

  //GET All Items from List ID
  router.get("/list/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      const items = await prisma.item.findMany({
        where: {
          listId: id
        }
      });

      if (items) {
        res.status(200).json({
          success: true,
          items
        });
      };
    } catch (e) {
      res.status(400).json({
        success: false,
        message: "Could not find items"
      });
    };
  });
  

  //Get Item by SKU
  router.get("/:SKU", async (req, res) => {
    const SKU = req.params.SKU;

    try {
      const item = await prisma.item.findFirstOrThrow({
        where: {
          SKU: parseInt(SKU),
        },
      });

      if (item) {
        res.status(200).json({
          success: true,
          item,
        });
      };
    } catch (e) {
      res.status(500).json({
        success: false,
        message: "Could not find SKU",
      });
    };
  });

  return router;
};