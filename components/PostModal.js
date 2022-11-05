import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MediumContext } from "../context/MediumContext";
import { fireStore } from "../firebase";
import Button from "./Button";
const PostModal = () => {
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("");
  const [postLength, setPostLength] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [body, setBody] = useState("");

  const { currentUser } = useContext(MediumContext);
  const router = useRouter();
  console.log(currentUser.email, "🥪 ");

  const addPostToFirebase = async (event) => {
    event.preventDefault();
    try {
      if (!title || !brief || !category || !postLength || !bannerImage || !body)
        return;
      const data = await addDoc(collection(fireStore, "articles"), {
        bannerImage: bannerImage,
        body: body,
        category: category,
        postLength: postLength,
        brief: brief,
        title: title,
        postedOn: new Date(),
        author: currentUser?.email,
      });
    } catch (err) {
      console.error(err);
    }

    router.push("/");
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-4 p-4 font-mediumSerif overflow-auto"
      onSubmit={addPostToFirebase}
    >
      <h1 className="my-8 font-bold text-3xl">Create a new Post</h1>
      <div className=" w-full flex justify-between gap-4">
        <span className="flex-1 text-end">Title</span>
        <span className="flex-[5] h-min border-2 border-[#787878]">
          <input
            type="text"
            className="w-full border-0 outline-none bg-transparent"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </span>
      </div>
      <div className=" w-full flex justify-between gap-4">
        <span className="flex-1 text-end">Brief</span>
        <span className="flex-[5] h-min border-2 border-[#787878]">
          <input
            type="text"
            className="w-full border-0 outline-none bg-transparent"
            onChange={(e) => setBrief(e.target.value)}
            value={brief}
          />
        </span>
      </div>
      <div className=" w-full flex justify-between gap-4">
        <span className="flex-1 text-end">Banner Image URL</span>
        <span className="flex-[5] h-min border-2 border-[#787878]">
          <input
            type="text"
            className="w-full border-0 outline-none bg-transparent"
            onChange={(e) => setBannerImage(e.target.value)}
            value={bannerImage}
          />
        </span>
      </div>
      <div className=" w-full flex justify-between gap-4">
        <span className="flex-1 text-end">Category</span>
        <span className="flex-[5] h-min border-2 border-[#787878]">
          <input
            type="text"
            className="w-full border-0 outline-none bg-transparent"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </span>
      </div>
      <div className=" w-full flex justify-between gap-4">
        <span className="flex-1 text-end">
          Estimated Read Length <br />
          (in minute)
        </span>
        <span className="flex-[5] h-min border-2 border-[#787878]">
          <input
            type="text"
            className="w-full border-0 outline-none bg-transparent"
            onChange={(e) => setPostLength(e.target.value)}
            value={postLength}
          />
        </span>
      </div>
      <div className=" w-full flex justify-between gap-4">
        <span className="flex-1 text-end">Body</span>
        <span className="flex-[5] h-min border-2 border-[#787878]">
          <textarea
            type="text"
            className="w-full border-0 outline-none bg-transparent"
            rows={12}
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </span>
      </div>
      <Button>Submit</Button>
    </form>
  );
};
export default PostModal;
