// POST /post - create new post
// GET /post - get all posts
// DELETE /post/:postId - delete a post
// PATCH /post/:postId - update a post

import { Router } from "express";
import { CreatePost } from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.post("/post", CreatePost);

export default postRouter;
