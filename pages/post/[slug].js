import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ArticleMain, ReadersNav, Recommendation } from "../../components";
import { MediumContext } from "../../context/MediumContext";

function Post() {
  const { posts, users, currentUser, handleUserAuth } =
    useContext(MediumContext);
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    // Guard clause
    if (posts.length === 0 || users.length === 0) {
      return;
    }

    setPost(posts.find((post) => post.id === router.query?.slug));

    setAuthor(users.find((user) => user.data?.id === post.data?.id));
  }, [post]);

  return (
    <div className="flex">
      <ReadersNav currentUser={currentUser} handleUserAuth={handleUserAuth} />
      <ArticleMain post={post} author={author} />
      <Recommendation post={post} />
    </div>
  );
}

export default Post;
