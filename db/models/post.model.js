import { db } from "../db";
import { DataTypes } from "sequelize";

const Post = db.define(
  "Post",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  },
);

export default Post;
