import { Inter } from "@next/font/google";
import Sidebar from "@/components/Sidebar";
import PostFeed from "@/components/PostFeed";
import Trending from "@/components/Trending";
import BottomBanner from "@/components/BottomBanner";
import { useSelector } from "react-redux";
import CommentModal from "@/components/modals/CommentModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const username = useSelector(state => state.user.username)
  return (
    <div>
      <div
        className="bg-black min-h-screen text-[#e7e9ea] 
    max-w-1400px mx-auto flex"
      >
        <Sidebar />
        <PostFeed />
        <Trending />
      </div>
      <CommentModal />
      {!username && <BottomBanner />}
    </div>
  );
}
