import express from "express";
import { prisma } from "../db/index.js";

export default function itemListRouter(passport) {
    const router = express.Router();

    //get itemList 
    router.get("/:itemList", passport.authenticate("jwt", {session: false}), async (request, response) => {
        const id = request.params.itemList;

        try{ 
            const itemList = await prisma.itemList.findMany({
                where: {
                    id: parseInt(id),
                    businessId: request.user.businessId
                }
            })
            if(itemList){
                response.status(200).json({
                    success: true,
                    message: "Item list fetched!",
                    itemList
                })
            } else{
                response.status(400).json({
                    success: false, 
                    message: "Could not get item list!"
                })
            }
        } catch (error){
            console.log(error)
            response.status(400).json({
                success: false, 
                message: "Oh no, something went wrong!"
            })
        }
    })

    
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