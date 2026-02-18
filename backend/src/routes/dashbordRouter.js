import express from "express";
import { getDashboardOverview, getFilteredTransactionByDate } from "../controllers/dashboardController.js";
import { handleValidationError } from "../middleware/validationMiddleware.js";
import { validateDashboard, validateFilters } from "../validator/dashboardValidator.js";

const router = express.Router();

router.get("/summary", validateDashboard, handleValidationError, getDashboardOverview);
router.get("/filters", validateFilters, handleValidationError, getFilteredTransactionByDate);

export default router;
