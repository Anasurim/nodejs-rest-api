const express = require("express");

const router = express.Router();

const {
  getAll,
  getById,
  createContact,
  deleteContact,
  updateById,
  updateFavorite,
} = require("../../controllers");

const { updateFavoriteSchema, contactSchema } = require("../../schemas");

const { validateBody, isValidId } = require("../../middlewares");

router.get("/", getAll);

router.get("/:id", isValidId, getById);

router.post("/", validateBody(contactSchema), createContact);

router.delete("/:id", isValidId, deleteContact);

router.put("/:id", isValidId, validateBody(contactSchema), updateById);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  updateFavorite
);

module.exports = router;
