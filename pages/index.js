import React from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-nextjs",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is the React Framework for Production - it makes building fullstack React apps a breeze and ships with built-in SSR and SSG.",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-nextjs",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is the React Framework for Production - it makes building fullstack React apps a breeze and ships with built-in SSR and SSG.",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-nextjs",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is the React Framework for Production - it makes building fullstack React apps a breeze and ships with built-in SSR and SSG.",
//     date: "2022-02-10",
//   },
// ];

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
