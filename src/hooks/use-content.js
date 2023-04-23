import { useState, useEffect, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import FirebaseContext from '../context/firebase';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { db } = useContext(FirebaseContext);

  useEffect(() => {
    getDocs(collection(db, target))
      .then((querySnapshot) => {
        const allContent = querySnapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { [target]: content };
}
