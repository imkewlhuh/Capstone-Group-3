import express from "express";
import prisma from "../db/index.js";
import argon2, { verify } from "argon2";

const router = express.Router();

//delete a user 
router.delete("/:user", async (request, response) => {
    try {
        const deleteUser = await prisma.user.delete({
            where: {
                username: request.body.username
            }
        });
        if (deleteUser) {
            response.status(200).json({
                success: true,
                message: "User was deleted!"
            });
        } else {
            response.status(500).json({
                success: false,
                message: "Something went wrong, user was not deleted!"
            })
        }
            } catch (e) {
                console.log(e);
                response.status(500).json({
                    success: false,
                    message: "Something went wrong!"
                });
            };
        })


 ///signup or create user route 
  router.post("/signup", async (request, response) => {
    try {
        const foundUser = await prisma.user.findFirst({
            where: {
                username: request.body.username
            }
        });

        if (foundUser) {
            response.status(400).json({
                success: false,
                message: "User already exists!"
            });
        } else {
            try {

                const hashPassword = await argon2.hash(request.body.password);

                if (hashPassword) {
                    const newUser = await prisma.user.create({
                        data: {
                            username: request.body.username,
                            password: hashPassword
                        }
                    });

                    if (newUser) {
                        console.log(newUser);
                        response.status(201).json({
                            success: true,
                            message: "User successfully created!",
                            newUser
                        });
                    } else {
                        response.status(400).json({
                            success: false,
                            message: "Something went wrong. Unable to create user."
                        });
                    };
                } else {
                    response.status(400).json({
                        success: false,
                        message: "Bad password"
                    });
                };

            } catch (e) {
                console.log(e);
                response.status(500).json({
                    success: false,
                    message: "Something went wrong!"
                });
            };
        };
    } catch (e) {
        console.log(e)
        response.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    };
});

export default router;