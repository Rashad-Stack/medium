import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import {
  ArticleMain,
  BottomTab,
  MobileHeader,
  ReadersNav,
  Recommendation,
} from "../../components";
import { MediumContext } from "../../context/MediumContext";

function Post() {
  const { posts, currentUser, handleUserAuth } = useContext(MediumContext);
  const router = useRouter();
  const [post, setPost] = useState([]);
  const headerRef = useRef(null);

  useEffect(() => {
    // Guard clause
    if (posts.length === 0) return;
    setPost(posts.find((post) => post.id === router.query?.slug));
  }, [posts]);

  return (
    <section>
      <div className="container max-w-screen-xl mx-auto">
        <div className="block md:flex justify-between">
          <MobileHeader heightRef={headerRef} />
          <ReadersNav />
          <ArticleMain heightRef={headerRef} post={post} />
          <BottomTab />
          <Recommendation post={post} />
        </div>
      </div>
    </section>
  );
}

export default Post;
