import React from "react";
import { Container, PostListWrapper } from "./styles";
import AddPost from "../AddPost";
import Post from "../Post";
import api from "../../Services/api";
import { useEffect } from "react";
import { useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("posts").then(({ data }) => {
      setPosts(data.posts);
    });
    console.log(posts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <PostListWrapper>
        {posts?.map((post) => (
          <Post
            key={post._id}
            id={post._id}
            title={post.title}
            description={post.description}
          />
        ))}

        <AddPost />
      </PostListWrapper>
    </Container>
  );
}
