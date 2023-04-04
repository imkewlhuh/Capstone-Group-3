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

    
}