import { query } from "express-validator";

const validateDashboard = [
  query("month")
    .notEmpty()
    .withMessage("Month is required")
    .isInt({ min: 1, max: 12 })
    .withMessage("Month must be between 1 and 12"),

  query("year")
    .notEmpty()
    .withMessage("Year is required")
    .isInt({min: 1000, max: 9999})
    .withMessage("Year must be an integer")
];

export { validateDashboard };
