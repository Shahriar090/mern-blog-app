import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="group relative w-full shadow-md dark:border dark:border-gray-800  h-[350px] overflow-hidden rounded-lg sm:w-[350px] md:w-[300px] sm:mx-auto transition-all duration-300">
      <Link to={`/view-post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[200px] w-full group-hover:h-[180px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg text-black dark:text-gray-400 font-bold line-clamp-2">
          {post.title}
        </p>
        <span className=" text-sm text-gray-800 dark:text-gray-500 ">
          Category : {post.category}
        </span>
        <Link
          to={`/view-post/${post.slug}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-purple-500 text-purple-800 hover:bg-purple-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          Read article
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
