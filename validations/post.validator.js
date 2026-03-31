import { body, validationResult } from "express-validator";

const createPostValidation = () => {
  return [body("title").trim()];
};
