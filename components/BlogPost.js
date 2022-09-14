import Postcard from "./Postcard";
function BlogPost() {
  return (
    <section className="blogPost">
      <div className="flex justify-center">
        <div className="container max-w-7xl flex-1">
          <div className="flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
            <Postcard />
            <Postcard />
            <Postcard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPost;
