import { useContext } from "react";
import { Banner, HomeStory } from "../components";
import { MediumContext } from "../context/MediumContext";
export default function Home() {
  const { currentUser } = useContext(MediumContext);

  return (
    <div className="mx-auto">
      <main>
        <Banner />
        <HomeStory />
      </main>
    </div>
  );
}
