import { useContext } from "react";
import { Banner, BlogPost, Header } from "../components";
import { MediumContext } from "../context/MediumContext";
export default function Home() {
  const { users } = useContext(MediumContext);
  console.log(users, "🤖");
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
