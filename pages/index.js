import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";
// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "GETTING STARTED",
//     image: "mongodb.jpg",
//     excerpt: "NextJS is a React framework for building fullstack production",
//     date: "2023-01-29",
//   },
//   {
//     slug: "getting-started-with-nextjs-2",
//     title: "GETTING STARTED-2",
//     image: "nextjs-back.jpg",
//     excerpt: "NextJS is a React framework for building fullstack production",
//     date: "2023-01-29",
//   },
// ];
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Sam's next blog</title>

        name='description'
        content = 'I post about programming and web development'
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPost = getFeaturedPosts();

  return {
    props: {
      posts: featuredPost,
    },
    revalidate: 60,
  };
}

export default HomePage;
