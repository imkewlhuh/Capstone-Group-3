import express from "express";
import prisma from "../db/index.js";

export default function setupBusinessRouter(passport) {
  const router = express.Router();

  router.put(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      const id = req.params.id;

      const editBusiness = await prisma.business.updateMany({
        where: {
          id: Number(id),
        },
        data: {
          type: req.body.type,
          name: req.body.name,
          location: req.body.location,
          admin: req.body.admin,
        },
      });

      res.status(200).json({
        success: true,
        editBusiness,
      });
    }
  );

  router.delete("/:businessId", passport.authenticate("jwt", { session: false }),
    
  async function (request, response) {
    const businessId = parseInt(request.params.businessId);
    try {
      await prisma.business.deleteMany({
        where: {
          id: businessId,
          admin: request.admin.user,
          products: request.item.list
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

  return router;
}
