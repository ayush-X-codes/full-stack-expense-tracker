import { body } from "express-validator";

const validateTransactions = [
    body("amount")
        .notEmpty().withMessage("Please enter an amount")
        .isFloat({ gt: 0 }).withMessage("Amount must be greater than 0"),

    body("description")
        .notEmpty().withMessage("Please enter a description")
        .isLength({ max: 200 }).withMessage('Description is too long (max 200 characters)'),

    body("date")
        .notEmpty().withMessage("Please enter a date")
        .isISO8601().withMessage("Please enter a valid date"),

    body("type")
        .notEmpty().withMessage("Please select a type")
        .isIn(['income', 'expense']).withMessage("Type must be income or expense"),

    body("categoryId")
        .notEmpty().withMessage("Please select a category")

]


export { validateTransactions }