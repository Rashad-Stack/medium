import { useRouter } from "next/router";
import { useContext } from "react";
import { Bookmarks, Notification, ReadersNav } from "../../components";
import { MediumContext } from "../../context/MediumContext";

const Navigation = () => {
  const { currentUser, handleUserAuth } = useContext(MediumContext);
  const router = useRouter();

  return (
    <div className="flex">
      <ReadersNav currentUser={currentUser} handleUserAuth={handleUserAuth} />
      <Notification />
      <Bookmarks />
    </div>
  );
};

export default Navigation;
