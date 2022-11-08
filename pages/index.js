import { useContext } from "react";
import { Banner, Header, HomeStory } from "../components";
import { MediumContext } from "../context/MediumContext";
export default function Home() {
  const { currentUser } = useContext(MediumContext);

  return (
    <div className="mx-auto">
      <Header />
      <main>
        <Banner />
        <HomeStory />
      </main>
    </div>
  );
}
