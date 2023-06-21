import express from "express";
import { prisma } from "../db/index.js";

export default function itemRouter(passport) {
  const router = express.Router();

  //Create Item
  router.post(
    "/new",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      console.log(req.body)
      try {
        const randomNum=Math.floor(Math.random() * (100 - 1) + 1)
        const newItem = await prisma.item.create({
          data: {
            SKU: req.body.sku,
            expDate: req.body.expDate,
            itemList:{
              connect:{
                id: parseInt(req.body.listId)
              }
            },
            images: `https://picsum.photos/id/${randomNum}/200`,
          name: req.body.name,
            price:parseFloat(req.body.price),
            quantity:parseInt(req.body.quantity),
            tags:{
              createMany:{
                data:req.body.tags.map((tag) =>{
                  return {
                    tag
                  }
                })
              }
            }
          },
        });

        if (newItem) {
          res.status(201).json({
            success: true,
            message: "Successfully added item"
          });
        };
      } catch (e) {
       console.log(e)
        res.status(500).json({
          success: false,
          message: "Failed to add item",
        });
      };
    }
  );

  //Update Item by id
  router.put(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      const id = req.params.id;

      const editItem = await prisma.item.update({
        where: {
          id: Number(id),
        },
        data: {
          name: req.body.name,
          quantity: req.body.quantity,
          price: req.body.price,
        },
      });

      res.status(200).json({
        success: true,
        editItem,
      });
    }
  );

  //Delete item by id
  router.delete(
    "/:id",
    passport.authenticate("jwt", { session: false }),

    async function (request, response) {
      const id = parseInt(request.params.id);
      try {
        await prisma.item.delete({
          where: {
            id: id,
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
        },
        include: {
          tags: {
            select: {
              tag: true
            }
          }
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
  

  //Get Item by id
  router.get("/:id", async (req, res) => {
    const id = req.params.id;

    try {
      const item = await prisma.item.findFirstOrThrow({
        where: {
          id: parseInt(id),
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