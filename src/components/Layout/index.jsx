import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import PostList from "../PostList";
import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Header />
      <PostList />
      <Footer />
    </Container>
  );
}
