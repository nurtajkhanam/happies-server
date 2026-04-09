import Post from "../db/models/post.model.js";

export const CreatePost = async (req, res) => {
  try {
    /*
      1. Validate user input from req.body - done
      2. Create a new post in db using sequelize post model
      3. Send success response to client
    */

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
      message: "Post fetched successfully",
      posts,
    });
  } catch (error) {
    throw error;
  }
};
