import { db } from "../db.js";
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
    tableName: "posts",
    underscored: true,
  },
);

export default Post;
