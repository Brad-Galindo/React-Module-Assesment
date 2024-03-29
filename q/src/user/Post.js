import React from "react";

import { deletePost } from "../api";
import { Link, useNavigate, useParams } from 'react-router-dom';
import NoPostSelectedMessage from "./NoPostSelectedMessage";

async function getPosts(signal) {
  const url = `https://jsonplaceholder.typicode.com/users/`;
  const response = await fetch(url, { signal });
  return response.json();
}




export const Post = ({ posts }) => {
  const {postId} = useParams(); // TODO: This ID will need to be pulled from parameters.
  const post = posts.find((post) => post.id === postId);

  const handleDelete = async (id) => {
    const navigate = useNavigate();
    const result = window.confirm("Are you sure you want to delete this post?");
    if (result) {
      await deletePost(id);
      // TODO: After the post is deleted, send the user to the home page.
      navigate("/");
    }
  };

  if (post) {
    return (
      <article className="col-12 p-4 border">
        <h3 className="display-4 mb-4">{post.title}</h3>
        <p>{post.body}</p>
        <button className="btn btn-danger" onClick={() => handleDelete(post.id)}>
          Delete Post
        </button>
      </article>
    );
  }
  return <NoPostSelectedMessage />;
};

export default Post;
