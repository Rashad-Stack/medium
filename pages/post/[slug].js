import { ReadersNav, Recommendation } from "../../components";
function Post() {
  return (
    <div className="flex">
      <ReadersNav />
      <div>Article Will go Here</div>
      <Recommendation />
    </div>
  );
}

export default Post;
