import { useRouter } from "next/router";
import Modal from "react-modal";
import PostModal from "./PostModal";

Modal.setAppElement("#__next");
const customStyles = {
  content: {
    width: "80%",
    height: "90%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10,11,13,0.75)",
  },
};
const CustomModal = ({ post }) => {
  const router = useRouter();

  const routerHandler = () => {
    router.push(router.asPath);
    router.back();
  };
  return (
    <Modal
      style={customStyles}
      isOpen={
        router.asPath === "/post/new-story" ||
        router.asPath === "/?post/new-story"
      }
      onRequestClose={routerHandler}
    >
      <PostModal routerHandler={routerHandler} />
    </Modal>
  );
};

export default CustomModal;
