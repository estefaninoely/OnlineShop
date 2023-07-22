import { useParams } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { blogPosts } from "./Blog";
import { Post } from "../utilities/types";

function BlogPost() {
  const { blogTitle } = useParams();
  const blogPost = blogPosts.find(
    (blogPost) => blogPost.title === blogTitle
  ) as Post;
  return (
    <>
      <Navbar />
      <div className="text-center flex items-center flex-col mb-44">
        <h3 className="numbers mt-6">30 Sep.</h3>
        <h1 className="titleblog mt-16">{blogPost.title}</h1>
        <p className="normalparagraph text-start w-4/6 mt-12">
          {blogPost.description}
        </p>
        <p className="normalparagraph text-start w-4/6 mt-6">
          {blogPost.description}
        </p>
        <p className="normalparagraph text-start w-4/6 mt-6">
          {blogPost.description}
        </p>
      </div>
      <Footer />
    </>
  );
}

export default BlogPost;
