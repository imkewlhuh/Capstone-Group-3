import express from "express";
import { prisma } from "../db/index.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

const router = express.Router();

//get single user/ router
router.get("/:userId", async (request, response)=>{
    const userId = request.params.userId;
    const user = await prisma.user.findFirst({
        where: {id : parseInt(userId)}
    })

    //if (user.length >= 1){
      response.status(200).json({
        success: true,
        user
      })
      
    
})

// Get all users router
router.get("/", async (_request, response) => {
  const user = await prisma.user.findMany({
    orderBy: {id : "asc"}
  })

  //if (user.length >= 1){
      response.status(200).json({
          success: true,
          user
        })
      })

//update a user
router.put("/:userId", async (request, response) => {
    try {
      const updateUser = await prisma.user.update({
        where: {
          id: parseInt(request.params.userId)
        },
        data: {
          name: request.body.name,
          email: request.body.email,
          password: request.body.password,
          businessId: request.body.businessId
        },
      });
  
      if (updateUser) {
        response.status(200).json({
          success: true,
          message: "User information was sucessfully updated!",
          updateUser
        });
      } else {
        response.status(500).json({
          success: false,
          message: "User was not able to be updated."
        });
      };
    } catch (err) {
      console.log(err);
      response.status(500).json({
        success: false,
        message: "Something went wrong"
      });
    };
  });

//delete a user 
router.delete("/:user", async (request, response) => {
    const id = request.params.user;

    try {
        const deleteUser = await prisma.user.delete({
            where: {
                id: parseInt(id)
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
            });
        };
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
                name: request.body.name
            }
        });

        if (foundUser) {
            response.status(401).json({
                success: false,
                message: "User already exists!"
            });
        } else {
            try {

                const hashPassword = await argon2.hash(request.body.password);

                if (hashPassword) {
                    const newUser = await prisma.user.create({
                        data: {
                            name: request.body.name,
                            email: request.body.email,
                            password: hashPassword,
                            businessId: request.body.businessId
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
                        response.status(500).json({
                            success: false,
                            message: "Something went wrong. Unable to create user."
                        });
                    };
                } else {
                    response.status(500).json({
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

//Login route
router.post("/login", async (request, response) => {
    try {
      const foundUser = await prisma.user.findFirstOrThrow({
        where: {
          name: request.body.name,
        },
      });
  
      try {
        const verifiedPassword = await argon2.verify(
          foundUser.password,
          request.body.password
        );
  
        if (verifiedPassword) {
          const token = jwt.sign(
            {
              user: {
                name: foundUser.name,
                id: foundUser.id,
              },
            },
            "group3Capstone"
          );
  
          response.status(200).json({
            success: true,
            token,
          });
        } else {
          response.status(401).json({
            success: false,
            message: "Wrong username or password",
          });
        };
      } catch (e) {
        response.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }
    } catch (e) {
      response.status(401).json({
        success: false,
        message: "Wrong username or password",
      });
    };
});

export default router;