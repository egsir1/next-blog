import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
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

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
