import express from "express";
import { prisma } from "../db/index.js";

export default function itemListRouter(passport) {
    const router = express.Router();


    //GET All itemLists for current business
    router.get("/business/:id", passport.authenticate("jwt", {session: false}), async (request, response) => {
        const businessId = request.params.id;

        try{ 
            const itemLists = await prisma.itemList.findMany({
                where: {
                    businessId: parseInt(businessId)
                }
            });
            if(itemLists){
                response.status(200).json({
                    success: true,
                    message: "Item lists fetched!",
                    itemLists
                });
            } else{
                response.status(400).json({
                    success: false, 
                    message: "Could not get item lists!"
                });
            };
        } catch (error){
            console.log(error);
            response.status(400).json({
                success: false, 
                message: "Oh no, something went wrong!"
            });
        };
    });
    

    // Create itemList 
  router.post("/new", passport.authenticate("jwt", { session: false}),
  async (request, response) => {
     try{
         const newItemList = await prisma.itemList.create({
             data: {
                name: request.body.name.toLowerCase(),
                count: request.body.count,
                businessId: request.body.businessId
             }
         });
         if(newItemList){
             response.status(201).json({
                 success: true,
                 message: "Added a new itemList!"
             });
         } else {
             response.status(500).json({
                 succes: false,
                 message: "failed to add new itemList!"
             });
         };
     } catch(e){
         response.status(500).json({
             success: false,
             message: "failed to add new itemList",
           });
      };
  });

    //get itemList 
    router.get("/:listId", passport.authenticate("jwt", {session: false}), async (request, response) => {
        const id = request.params.listId;

        try{ 
            const itemList = await prisma.itemList.findMany({
                where: {
                    id: parseInt(id),
                    businessId: request.user.businessId
                }
            });
            if(itemList){
                response.status(200).json({
                    success: true,
                    message: "Item list fetched!",
                    itemList
                });
            } else{
                response.status(400).json({
                    success: false, 
                    message: "Could not get item list!"
                });
            };
        } catch (error){
            console.log(error);
            response.status(400).json({
                success: false, 
                message: "Oh no, something went wrong!"
            });
        };
    });
    
    //Update itemList
    router.put(
        "/:listId",
        passport.authenticate("jwt", { session: false }),
        async (req, res) => {
            const id = req.params.listId;

            try {
                const itemList = await prisma.itemList.findFirstOrThrow({
                    where: {
                        id: parseInt(id),
                        businessId: req.user.businessId
                    }
                });

                if (itemList) {
                    const updatedList = await prisma.itemList.updateMany({
                        where: {
                            id: parseInt(id)
                        },
                        data: {
                            name: req.body.name,
                            count: parseInt(req.body.count),
                        }
                    });

                    if (updatedList) {
                        res.status(200).json({
                            success: true,
                            message: "List updated"
                        });
                    } else {
                        res.status(500).json({
                            success: false,
                            message: "Failed to update list"
                        });
                    };
                };
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
    "/:listId",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const id = req.params.listId;

        try {
            const deleteList = await prisma.itemList.delete({
                where: {
                    id: parseInt(id)
                }
            });

            if (deleteList) {
                res.status(200).json({
                    success: true,
                    message: "Item List deleted"
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