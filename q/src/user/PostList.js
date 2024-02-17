import React, { useEffect, useState } from "react";
import { useParams, Switch, Route, useRouteMatch, Routes } from "react-router-dom";
import Post from "./Post";
import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

/*
  TODO: Update the below so that the components show on the appropriate route.
  
  Hint: you can use the `useParams()` hook from "react-router-dom" to get the userId

  The <NoPostSelectedMessage /> component should show up on the following route:
  /users/:userId/posts

  The <Post /> component should show up on the following route:
  /users/:userId/posts/:postId
*/

export const PostList = () => {

  
  const [posts, setPosts] = useState(null);
  const { userId, postId } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, [userId]);

  if (!posts) return <div>Loading...</div>;

  const postLinks = posts.map((post) => (
    <PostLink key={post.id} userId={userId} post={post} />
  ));

  console.log(postLinks);

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        <Routes>
          <Route path={`/users/${userId}/posts`} element={<NoPostSelectedMessage />} />
          <Route path={`/users/${userId}/posts/:postId`} element={<Post />} />
        </Routes>
      </div>
    </div>
  );
};

export default PostList;