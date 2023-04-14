import express from "express";
import { prisma } from "../db/index.js";

export default function setupBusinessRouter(passport) {
  const router = express.Router();

  //Get All Businesses
  router.get("/", async (_req, res) => {
    try {
      const businesses = await prisma.business.findMany({
        orderBy: {
          id: "asc"
        }
      });

      if (businesses) {
        res.status(200).json({
          success: true,
          businesses
        });
      };
    } catch (e) {
      res.status(500).json({
        success: false,
        message: "Could not find businesses"
      });
    };
  });

  //Get Business by Id
  router.get("/:businessId", async (req, res) => {
    const id = req.params.businessId;

    try {
      const business = await prisma.business.findFirstOrThrow({
        where: {
          id: parseInt(id)
        }
      });

      if (business) {
        res.status(200).json({
          success: true,
          business
        });
      };
    } catch (e) {
      res.status(500).json({
        success: false,
        message: "Could not find business"
      });
    };
  });

  //Update Business
  router.put(
    "/:businessId",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      const id = req.params.businessId;

      const editBusiness = await prisma.business.update({
        where: {
          id: Number(id),
        },
        data: {
          type: req.body.type,
          name: req.body.name,
          location: req.body.location,
          admin: req.body.admin,
          products: req.body.products
        }
      });

      res.status(200).json({
        success: true,
        editBusiness,
      });
    }
  );

  //Delete Business
  router.delete("/:businessId", passport.authenticate("jwt", { session: false }),

    async function (request, response) {
      const businessId = parseInt(request.params.businessId);
      try {
        if (businessId === request.user.businessId) {
          await prisma.business.delete({
            where: {
              id: businessId,
            },
          });

          response.status(200).json({
            success: true,
          });
        };

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

  return router;
};