import { validationResult } from "express-validator";

export const FormatValidationErrMiddleware = (req, res, next) => {
  const validationErr = validationResult(req);

  if (!validationErr.isEmpty()) {
    const formattedErr = validationErr
      .formatWith(({ msg, path }) => {
        return {
          field: path,
          message: msg,
        };
      })
      .array();

    return res.status(422).json({ errors: formattedErr });
  }

  next();
};
