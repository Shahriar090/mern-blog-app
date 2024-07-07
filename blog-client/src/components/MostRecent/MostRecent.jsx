import React, { useEffect, useState } from "react";
import SectionTitle from "../../ui/SectionTitle";
import Container from "../../ui/Container";
import PostCard from "../../ui/PostCard";
import codingImg from "../../assets/coding-img-1.avif";
import { Spinner } from "flowbite-react";
const MostRecent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch("/api/post/getposts");
      const data = await res.json();
      console.log(data);
      setPosts(data.posts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <section>
      <Container>
        <SectionTitle heading="Most Recent" subHeading="Newest Tech Articles" />

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-[2]">
            {loading ? (
              <Spinner className="flex justify-center" />
            ) : (
              posts
                .slice(0, 4)
                .map((post) => <PostCard key={post._id} post={post} />)
            )}
          </div>
          <div className="img flex-[1]">
            <div className="relative">
              <picture>
                <img
                  src={codingImg}
                  alt="Reading Image"
                  className="rounded-md w-full h-[710px]"
                />
              </picture>
              <div className="overlay  absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MostRecent;
