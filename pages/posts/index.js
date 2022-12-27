import React from "react";
import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for Production - it makes building fullstack React apps a breeze and ships with built-in SSR and SSG.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for Production - it makes building fullstack React apps a breeze and ships with built-in SSR and SSG.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for Production - it makes building fullstack React apps a breeze and ships with built-in SSR and SSG.",
    date: "2022-02-10",
  },
];
const PostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default PostsPage;
