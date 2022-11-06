import { signInWithPopup } from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, fireStore, provider } from "../firebase";

const MediumContext = createContext();
const MediumContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(fireStore, "users"));
      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc?.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );
    };
    getUsers();
  }, []);

  const getPOsts = async () => {
    const querySnapshot = await getDocs(collection(fireStore, "articles"));
    setPosts(
      querySnapshot.docs.map((doc) => {
        return {
          id: doc?.id,
          data: {
            author: doc.data().author,
            authorImage: doc.data().authorImage,
            bannerImage: doc.data().bannerImage,
            body: doc.data().body,
            brief: doc.data().brief,
            category: doc.data().category,
            postLength: doc.data().postLength,
            postedOn: doc.data().postedOn?.toDate(),
            title: doc.data().title,
          },
        };
      })
    );
  };

  useEffect(() => {
    getPOsts();
  }, []);

  const addUserToFirebase = async (user) => {
    await setDoc(doc(fireStore, "users", user.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followerCount: 0,
    });
  };

  const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider);
    const user = userData.user;
    setCurrentUser(user);
    addUserToFirebase(user);
  };

  return (
    <MediumContext.Provider
      value={{ posts, users, handleUserAuth, currentUser, getPOsts }}
    >
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumContextProvider };
