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
    <div className="flex">
      <ReadersNav currentUser={currentUser} handleUserAuth={handleUserAuth} />
      <ArticleMain post={post} />
      <Recommendation post={post} />
      <CustomModal post={post} />
    </div>
  );
}

export default Post;
