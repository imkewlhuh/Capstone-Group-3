import express from "express";
import { prisma } from "../db/index.js";

export default function itemListRouter(passport) {
    const router = express.Router();

    //Update itemList
    router.put(
        "/:itemListId",
        passport.authenticate("jwt", { session: false }),
        async (req, res) => {
            const id = req.params.itemListId;

            try {
                const itemList = await prisma.itemList.findFirstOrThrow({
                    where: {
                        id: parseInt(id),
                        businessId: req.user.businessId
                    }
                });

                if (itemList) {
                    const updatedList = await prisma.itemList.update({
                        where: {
                            id: parseInt(id)
                        },
                        data: {
                            name: req.body.name,
                            item: req.body.item,
                            count: req.body.count,
                            businessId: req.body.businessId
                        }
                    });

                    if (updatedList) {
                        res.status(200).json({
                            success: true
                        });
                    } else {
                        res.status(500).json({
                            success: false,
                            message: "Failed to update list"
                        });
                    };
                }
            } catch (e) {
                res.status(500).json({
                    success: false,
                    message: "Could not find list"
                });
            };
        }
    );

//DELETE itemList
router.delete(
    "/:itemListId",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const id = req.params.itemListId;

        try {
            const deleteList = await prisma.itemList.delete({
                where: {
                    id: parseInt(id)
                }
            });

            if (deleteList) {
                res.status(200).json({
                    success: true
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "Failed to delete item list"
                });
            };
        } catch (e) {
            res.status(500).json({
                success: false,
                message: "Could not find item list"
            });
        };
    }
);

return router;
};