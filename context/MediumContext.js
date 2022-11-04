import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { fireStore } from "../firebase";

const MediumContext = createContext();
const MediumContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(fireStore, "articles"));
      setPosts(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc?.id,
            data: {
              author: doc.data().author,
              bannerImage: doc.data().bannerImage,
              body: doc.data().body,
              brief: doc.data().brief,
              category: doc.data().category,
              postLength: doc.data().postLength,
              postedOn: doc.data().postedOn.toDate(),
              title: doc.data().title,
            },
          };
        })
      );
    };
    getUsers();
  }, []);
  return (
    <MediumContext.Provider value={{ posts, users }}>
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumContextProvider };
