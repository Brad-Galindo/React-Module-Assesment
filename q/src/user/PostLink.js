import React from "react";
import { useLocation, useParams, Link } from 'react-router-dom';

export const PostLink = ({ post }) => {
  const {postId} = useParams();
  const { pathname } = useLocation();

  return (
    <li className="list-group-item text-truncate">
      <Link to={`${pathname}/${postId}`}>{post.title}</Link>
    </li>
  );
};

export default PostLink;