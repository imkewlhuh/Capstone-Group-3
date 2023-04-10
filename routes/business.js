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

  return router;
}
