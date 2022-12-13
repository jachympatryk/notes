import { doc, getDocs, setDoc, query, where } from "firebase/firestore";

import { firestoreCollections, getCollectionRef } from "config";
import { NoteModels } from "models";

export const getUserNotes = (userId: string) => {
  const notesRef = getCollectionRef<NoteModels[]>(firestoreCollections.notes);
  const notesQuery = query(notesRef, where("userId", "==", userId));

  return getDocs(notesQuery);
};

export const createNote = (data: NoteModels) => {
  const noteRef = getCollectionRef<NoteModels>(firestoreCollections.notes);
  const noteDocument = doc(noteRef);

  return setDoc(noteDocument, data);
};
