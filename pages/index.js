import { Banner, BlogPost, Header } from "../components";
export default function Home() {
  return (
    <div className="mx-auto">
      <Header />
      <main>
        <Banner />
        <BlogPost />
      </main>
    </div>
  );
}
