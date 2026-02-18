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
    .isInt({ min: 1000, max: 9999 })
    .withMessage("Year must be an integer"),
];

const validateFilters = [
  query("range")
    .optional()
    .isIn(["this_month", "last_month", "custom"])
    .withMessage("Range must be this_month, last_month, custom"),

  query("startDate")
    .if(query("range").equals("custom"))
    .notEmpty().withMessage("Start date is required when range is custom")
    .isISO8601().withMessage("Start date must be a valid date"),

  query("endDate")
    .if(query("range").equals("custom"))
    .notEmpty().withMessage("End date is required when range is custom")
    .isISO8601().withMessage("End date must be a valid date"),

  query("categoryId")
    .optional()
    .notEmpty().withMessage("Category ID cannot be empty"),

  query("type")
    .optional()
    .isIn(["income", "expense"])
    .withMessage("Type must be either income or expense")

];
export { validateDashboard , validateFilters};
