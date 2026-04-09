import Post from "../db/models/post.model.js";

export const CreatePost = async (req, res) => {
  try {
    const { title, description } = req.body;

    await Post.create({ title, description });

    return res.status(201).json({
      message: "Post created successfully!",
    });
  } catch (error) {
    throw error;
  }
};

export const GetAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: { exclude: ["updatedAt", "deletedAt"] },
    });

    return res.status(200).json({
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    throw error;
  }
};

export const GetPostById = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await Post.findByPk(postId, {
      attributes: { exclude: ["updatedAt", "deletedAt"] },
    });

    let message = "Post fetched successfully";
    let status = 200;

    if (!post) {
      message = "Post not found";
      status = 404;
    }

    return res.status(status).json({
      message,
      post,
    });
  } catch (error) {
    throw error;
  }
};
