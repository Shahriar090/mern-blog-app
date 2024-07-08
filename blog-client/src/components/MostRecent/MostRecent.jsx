import React, { useEffect, useState } from "react";
import SectionTitle from "../../ui/SectionTitle";
import Container from "../../ui/Container";
import PostCard from "../../ui/PostCard";
import advertiseOne from "../../assets/advertise-1.avif";
import advertiseTwo from "../../assets/advertise-2.jpg";
import { Spinner } from "flowbite-react";
const MostRecent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch(
        "https://blog-server-one-theta.vercel.app/api/post/getposts"
      );
      const data = await res.json();
      setPosts(data.posts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <section className="shadow-sm">
      <Container>
        <SectionTitle heading="Most Recent" subHeading="Newest Tech Articles" />

        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 flex-[3]">
            {loading ? (
              <Spinner className="flex justify-center" />
            ) : (
              posts
                .slice(0, 6)
                .map((post) => <PostCard key={post._id} post={post} />)
            )}
          </div>
          <div className="img flex-[1] cursor-pointer">
            <div className="relative">
              <picture>
                <img
                  src={advertiseOne}
                  alt="Reading Image"
                  className="rounded-md w-full h-[350px]"
                />
              </picture>
              <div className="overlay  absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <div className="mt-2 relative">
              <picture>
                <img
                  src={advertiseTwo}
                  alt="Reading Image"
                  className="rounded-md w-full h-[350px]"
                />
              </picture>
              {/* overlay did start */}
              <div className="overlay  absolute inset-0 bg-black bg-opacity-30"></div>
              {/* overlay did end */}
              <h1 className="absolute top-0 text-gray-300 text-lg text-center bg-black w-full p-3 bg-opacity-70">
                Become A Social Media Manager
              </h1>
              <h1 className="absolute bottom-0 text-gray-300  text-center bg-black w-full p-3 bg-opacity-70 text-sm">
                www.jobless-media.com
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MostRecent;
