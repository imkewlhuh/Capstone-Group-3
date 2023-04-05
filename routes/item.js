import express from "express";
import { prisma } from "../db/index.js";

export default function itemRouter(passport) {
    const router = express.Router();

    //Create Item
    router.post(
        "/",
        passport.authenticate("jwt", { session: false }),
        async (req, res) => {
            try {
                const newItem = await prisma.item.create({
                    data: {
                        SKU: req.body.SKU,
                        expDate: req.body.expDate,
                        listId: req.itemList.id
                    }
                });

                if (newItem) {
                    res.status(201).json({
                        success: true
                    });
                };
            } catch (e) {
                res.status(500).json({
                    success: false,
                    message: "Failed to add item"
                });
            };
        }
    );

    router.delete("/:itemsId", passport.authenticate("jwt", { session: false }),
    
    async function (request, response) {
      const itemsId = parseInt(request.params.itemsId);
      try {
        await prisma.item.deleteMany({
          where: {
            id: itemsId,
            listId: request.list.id
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
        }
      }
    }
  );

    
}