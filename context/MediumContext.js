import { collection, getDocs } from "firebase/firestore";
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
  return (
    <MediumContext.Provider value={{ posts, users }}>
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumContextProvider };
