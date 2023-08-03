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

const { validateBody, isValidId, authenticate } = require("../../middlewares");

router.get("/", authenticate, getAll);

router.get("/:id", authenticate, isValidId, getById);

router.post("/", authenticate, validateBody(contactSchema), createContact);

router.delete("/:id", authenticate, isValidId, deleteContact);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(contactSchema),
  updateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(updateFavoriteSchema),
  updateFavorite
);

module.exports = router;
