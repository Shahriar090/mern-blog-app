import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction/CallToAction";
import CommentSection from "../components/CommentSection/CommentSection";
import PostCard from "../ui/PostCard";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const ViewPost = () => {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  // fetching recent post
  useEffect(() => {
    try {
      const fetchRecentPost = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPost();
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  return (
    <Container>
      <div className="h-full flex flex-col">
        <h1 className="text-3xl text-center lg:text-4xl bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent capitalize">
          {post && post.title}
        </h1>
        <Link
          to={`/search?category=${post && post.category}`}
          className="self-center mt-5"
        >
          <Button color="gray" pill size="xs">
            {post && post.category}
          </Button>
        </Link>

        <div className=" mt-10">
          <img
            src={post && post.image}
            alt={post && post.title}
            className="max-h-[400px] w-full md:w-[40%] md:mx-auto rounded-md"
          />
        </div>

        <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
          <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
          <span className="italic">
            {post && (post.content.length / 1000).toFixed(0)} mins read
          </span>
        </div>
        <div
          className="p-3 max-w-3xl mx-auto w-full post-content mt-2 text-lg"
          dangerouslySetInnerHTML={{ __html: post && post.content }}
        ></div>
        {/* call to action */}
        {/* <div className="max-w-4xl mx-auto w-full">
        <CallToAction />
      </div> */}
        <div>
          <CommentSection postId={post._id} />
        </div>
        {/* recent posts/articles */}
        <div className="flex flex-col justify-center items-center mt-5">
          <SectionTitle heading="Recent Articles" />
          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            {recentPosts &&
              recentPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ViewPost;
