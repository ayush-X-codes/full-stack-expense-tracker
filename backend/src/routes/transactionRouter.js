import express from "express";
import {
  addTransaction,
  getAllTransactions,
  removeTransaction,
} from "../controllers/transactionController.js";
import { handleValidationError } from "../middleware/validationMiddleware.js";
import { validateTransactions } from "../validator/transactionValidator.js";
const router = express.Router();

router.get("/", getAllTransactions);
router.post("/", validateTransactions, handleValidationError, addTransaction);
router.delete("/:id", removeTransaction);

export default router;
