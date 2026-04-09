// POST /post - create new post
// GET /post - get all posts
// DELETE /post/:postId - delete a post
// PATCH /post/:postId - update a post

import { Router } from "express";
import {
  CreatePost,
  GetAllPosts,
  GetPostById,
} from "../controllers/post.controller.js";
import {
  createPostValidation,
  getPostByIdValidation,
} from "../validations/post.validator.js";
import { FormatValidationErrMiddleware } from "../middlewares/validation.middleware.js";

const postRouter = Router();

postRouter.post(
  "/post",
  createPostValidation(),
  FormatValidationErrMiddleware,
  CreatePost,
);

postRouter.get("/posts", GetAllPosts);

postRouter.get(
  "/post/:postId",
  getPostByIdValidation(),
  FormatValidationErrMiddleware,
  GetPostById,
);

export default postRouter;
