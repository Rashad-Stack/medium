import { ArticleMain, ReadersNav, Recommendation } from "../../components";
function Post() {
  return (
    <div className="flex">
      <ReadersNav />
      <ArticleMain />
      <Recommendation />
    </div>
  );
}

export default Post;
