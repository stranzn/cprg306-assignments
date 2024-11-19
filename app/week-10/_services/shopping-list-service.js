import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, DocumentReference } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const q = query(collection(db, "users", userId, "items"));

    const querySnap = await getDocs(q);

    const items = [];

    querySnap.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });

    console.log(items);
    return items;
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
};

export const addItems = async ( userId, item ) => {
    try {
        const docRef = await addDoc(collection(db, "users", userId, "items"), {
            name: item.name,
            quantity: item.quantity,
            category: item.category
          });
          console.log("Document written with ID: ", docRef.id);
          return docRef.id;

    } catch (e) {
        console.error("Error could not add item: ", e);
        return null;
    }
};
