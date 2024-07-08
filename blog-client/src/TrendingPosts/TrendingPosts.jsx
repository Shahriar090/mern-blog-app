import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import PostCard from "../ui/PostCard";
import { Spinner } from "flowbite-react";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getTrendingPost = async () => {
      try {
        const res = await fetch(
          "/api/post/getposts?trending===true&limit=6&sort=minutesRead"
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
      </Container>
    </section>
  );
};

export default TrendingPosts;
