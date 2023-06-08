import express from "express";
import { prisma } from "../db/index.js";

export default function itemListRouter(passport) {
    const router = express.Router();


    //GET All itemLists
    router.get("/", passport.authenticate("jwt", {session: false}), async (request, response) => {

        try{ 
            const itemLists = await prisma.itemList.findMany({
                where: {
                    businessId: request.user.businessId
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
    router.get("/:listName", passport.authenticate("jwt", {session: false}), async (request, response) => {
        const name = request.params.listName;

        try{ 
            const itemList = await prisma.itemList.findMany({
                where: {
                    name: name.toLowerCase(),
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
        "/:listName",
        passport.authenticate("jwt", { session: false }),
        async (req, res) => {
            const name = req.params.listName.toLowerCase();

            try {
                const itemList = await prisma.itemList.findFirstOrThrow({
                    where: {
                        name: name,
                        businessId: req.user.businessId
                    }
                });

                if (itemList) {
                    const updatedList = await prisma.itemList.updateMany({
                        where: {
                            name: name,
                        },
                        data: {
                            name: req.body.name,
                            count: req.body.count,
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
    "/:listName",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const name = req.params.listName.toLowerCase();

        try {
            const deleteList = await prisma.itemList.deleteMany({
                where: {
                    name: name
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