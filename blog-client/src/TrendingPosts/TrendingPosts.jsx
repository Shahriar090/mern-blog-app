import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import PostCard from "../ui/PostCard";
import { Spinner } from "flowbite-react";
import advertiseImg from "../assets/advertising-3.jpg";
const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getTrendingPost = async () => {
      try {
        const res = await fetch(
          "/api/post/getposts?trending===true&limit=4&sort=minutesRead"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch trending posts");
        }
        const data = await res.json();
        setTrendingPosts(data.posts);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    };
    getTrendingPost();
  }, []);
  return (
    <section>
      <Container>
        <SectionTitle
          heading="Top Trending"
          subHeading="Last 7 Days Favorite"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? (
            <Spinner />
          ) : (
            trendingPosts?.map((post) => (
              <PostCard key={post._id} post={post} />
            ))
          )}
        </div>
        <div className="advertising border mt-8 relative cursor-pointer">
          <div className="overlay  absolute inset-0 bg-black bg-opacity-10"></div>
          <img
            src={advertiseImg}
            alt="Advertise Image"
            className="w-full md:h-[250px] object-cover rounded-md"
          />
        </div>
      </Container>
    </section>
  );
};

export default TrendingPosts;
