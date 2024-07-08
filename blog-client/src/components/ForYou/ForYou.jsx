import React, { useEffect, useState } from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import PostCardLg from "../../ui/PostCardLg";
import PostCard from "../../ui/PostCard";

const ForYou = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <section className="shadow-sm">
      <Container>
        <SectionTitle heading="For You" subHeading="Based On Your Interests" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.slice(0, 2).map((post) => (
            <PostCardLg key={post._id} post={post} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
          {posts.slice(2, 6).map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ForYou;
