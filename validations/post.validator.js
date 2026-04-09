import { body } from "express-validator";

export const createPostValidation = () => {
  return [
    body("title")
      .optional()
      .trim()
      .isLength({ min: 2, max: 200 })
      .withMessage("Invalid title character limit")
      .escape(),
    body("description")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Description can't be empty!")
      .bail()
      .isLength({ min: 2, max: 10000 })
      .withMessage("Invalid description character limit"),
  ];
};
