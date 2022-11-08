import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import {
  ArticleMain,
  CustomModal,
  ReadersNav,
  Recommendation,
} from "../../components";
import { MediumContext } from "../../context/MediumContext";

function Post() {
  const { posts, currentUser, handleUserAuth } = useContext(MediumContext);
  const router = useRouter();
  const [post, setPost] = useState([]);

  useEffect(() => {
    // Guard clause
    if (posts.length === 0) return;
    setPost(posts.find((post) => post.id === router.query?.slug));
  }, [posts]);

  return (
    <div className="container max-w-screen-xl mx-auto flex justify-between">
      <div className="w-20">
        <ReadersNav />
      </div>
      <ArticleMain post={post} />
      <div className="w-80 lg:w-96">
        <Recommendation post={post} />
      </div>
      <CustomModal />
    </div>
  );
}

export default Post;
