import Banner from "../components/Banner/Banner";
import MostRecent from "../components/MostRecent/MostRecent";
import ForYou from "../components/ForYou/ForYou";
import TrendingPosts from "../TrendingPosts/TrendingPosts";

export default function Home() {
  return (
    <div>
      <Banner />
      <MostRecent />
      <ForYou />
      <TrendingPosts />
    </div>
  );
}
