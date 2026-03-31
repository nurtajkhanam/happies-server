export const CreatePost = async (req, res) => {
  try {
    /*
      1. Validate user input from req.body
      2. Create a new post in db using sequelize post model
      3. Send success response to client
    */

    return res.json({
      message: "Post created successfully!",
    });
  } catch (error) {
    throw error;
  }
};
