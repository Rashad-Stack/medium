import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
const BlogPostNave = () => {
  return (
    <div className={`w-full flex items-center gap-5 border-b mt-1`}>
      <Link href="me/following/suggestion">
        <a className={`text-sm text-gray-600 hover:text-gray-800`}>
          <AiOutlinePlus />
        </a>
      </Link>
      <Link href="posts">
        <a className="text-sm text-gray-600 hover:text-gray-800 py-5">
          For You
        </a>
      </Link>
      <Link href="me/posts">
        <a className="text-sm text-gray-600 hover:text-gray-800 py-5">
          Following
        </a>
      </Link>
    </div>
  );
};

export default BlogPostNave;
