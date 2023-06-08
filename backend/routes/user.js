import express from "express";
import { prisma } from "../db/index.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

export default function authRouter(passport) {
  const router = express.Router();

  //get logged in user route
  router.get("/current",
    passport.authenticate("jwt", { session: false }),
    async (request, response) => {
      try {
        const user = await prisma.user.findFirstOrThrow({
          where: {
            id: request.user.id
          },
          select: {
            name: true,
            email: true,
            businessId: true,
          }
        });

        if (user) {
          response.status(200).json({
            success: true,
            user
          });
        };
      } catch (e) {
        response.status(500).json({
          success: false,
          message: "You must be logged in!"
        });
      };
    });

  // Get all users router
  router.get("/", async (_request, response) => {
    const user = await prisma.user.findMany({
      orderBy: { id: "asc" },
    });

    //if (user.length >= 1){
    response.status(200).json({
      success: true,
      user,
    });
  });

  //update a user
  router.put("/:userId", async (request, response) => {
    try {
      const updateUser = await prisma.user.update({
        where: {
          id: parseInt(request.params.userId),
        },
        data: {
          name: request.body.name,
          email: request.body.email,
          password: request.body.password,
          businessId: request.body.businessId,
        },
      });

      if (updateUser) {
        response.status(200).json({
          success: true,
          message: "User information was sucessfully updated!",
          updateUser,
        });
      } else {
        response.status(500).json({
          success: false,
          message: "User was not able to be updated.",
        });
      }
    } catch (err) {
      console.log(err);
      response.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  });

  //delete a user
  router.delete("/:user", async (request, response) => {
    const id = request.params.user;

    try {
      const deleteUser = await prisma.user.delete({
        where: {
          id: parseInt(id),
        },
      });

      if (deleteUser) {
        response.status(200).json({
          success: true,
          message: "User was deleted!",
        });
      } else {
        response.status(500).json({
          success: false,
          message: "Something went wrong, user was not deleted!",
        });
      }
    } catch (e) {
      console.log(e);
      response.status(500).json({
        success: false,
        message: "Something went wrong!",
      });
    }
  });

  ///signup or create user route
  router.post("/signup", async (request, response) => {
    try {
      const foundUser = await prisma.user.findFirst({
        where: {
          email: request.body.email,
        },
      });

      if (foundUser) {
        response.status(401).json({
          success: false,
          message: "User already exists!",
        });
      } else {
        try {
          const hashPassword = await argon2.hash(request.body.password);

          if (hashPassword) {
            try {
                // const newBusiness = await prisma.business.create({
                //   data: {
                //     name: request.body.businessName || request.body.name,
                //     type: request.body.businessType,
                //     location: request.body.businessLocation || null,
                //   },
                // });

                // await prisma.productTypeToBusiness.createMany({
                //   data: request.body.productTypes.map((it) => ({
                //     businessId: newBusiness.id,
                //     productTypeId: it,
                //   })),
                // });

              const newUser = await prisma.user.create({
                data: {
                  name: request.body.name,
                  email: request.body.email,
                  password: hashPassword,
                  // businessId: newBusiness.id,
                  business: request.body.business
                },
                select: {
                  name: true,
                  email: true,
                },
              });

              if (newUser) {
                response.status(201).json({
                  success: true,
                  message: "User successfully created!",
                  newUser,
                });
              } else {
                response.status(500).json({
                  success: false,
                  message: "Something went wrong. Unable to create user.",
                });
              }
            } catch (e) {
              console.log(e);
              response.status(500).json({
                success: false,
                message: "Something went wrong.",
              });
            }
          } else {
            response.status(500).json({
              success: false,
              message: "Bad password",
            });
          }
        } catch (e) {
          console.log(e);
          response.status(500).json({
            success: false,
            message: "Something went wrong!",
          });
        }
      }
    } catch (e) {
      console.log(e);
      response.status(500).json({
        success: false,
        message: "Something went wrong!",
      });
    }
  });

  //Login route
  router.post("/login", async (request, response) => {
    try {
      const foundUser = await prisma.user.findFirstOrThrow({
        where: {
          email: request.body.email,
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
                email: foundUser.email,
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
        }
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
    }
  });

  return router;
};