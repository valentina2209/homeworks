import { collection, getDocs, query, orderBy, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getDreams = async () => {
  try {
    const dreamsRef = collection(db, "dreams");
    const dreamSort = query(dreamsRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(dreamSort);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Помилка при отриманні мрій:", error);
    throw error;
  }
};

export const deleteDream = async (id: string) => {
  try {
    const dreamDoc = doc(db, "dreams", id);
    await deleteDoc(dreamDoc);
  } catch (error) {
    console.error("Помилка при видаленні мрії:", error);
    throw error;
  }
};