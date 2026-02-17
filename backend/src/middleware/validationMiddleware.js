import { validationResult } from "express-validator";

function handleValidationError(req, res, next) {
  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: err.array(),
    });
  }

  next();
}

export { handleValidationError };
