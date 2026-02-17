import express from "express";
import { getDashboardOverview } from "../controllers/dashboardController.js";
import { handleValidationError } from "../middleware/validationMiddleware.js";
import { validateDashboard } from "../validator/dashboardValidator.js";

const router = express.Router();

router.get("/summary", validateDashboard, handleValidationError, getDashboardOverview);

export default router;
