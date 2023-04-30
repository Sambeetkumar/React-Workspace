import { React, useState, useEffect } from "react";
//import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CreateArea from "../components/CreateArea";
import Note from "../components/Note";
import Footer from "../components/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../utils/firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

export default function TakeNote() {
  const [avatar, setAvatar] = useState("");
  const [user,loading] = useAuthState(auth);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  
  //reading data
  const getData = async () => {
    if (loading) return;
    if (!user) return navigate("/");
    setAvatar(user.photoURL);
    const collectionRef = collection(db, `${user.uid}`);
    const q = query(collectionRef, orderBy("timestamp","asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };

  //write to database
  const addNote = async(newNote) => {
    const collectionRef = collection(db, `${user.uid}`);
      await addDoc(collectionRef, {
        ...notes,
        timestamp: serverTimestamp(),
        title: newNote.title,
        content: newNote.content,
        username: user.displayName,
      });
  }
  //deleting data
  const deleteNote = async (id) => {
    const docRef = doc(db, `${user.uid}`, id);
    await deleteDoc(docRef);
  };

  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div className="app min-h-screen relative flex flex-col gap-4 bg-zinc-100 dark:bg-zinc-900">
      <Header avatar={avatar} />
      <CreateArea onAdd={addNote} />
      <div className="flex flex-col sm:flex-row sm:gap-4 flex-wrap my-6 items-center justify-center">
        {notes.map((noteitem, index) => (
          <Note
            key={index}
            id={noteitem.id}
            title={noteitem.title}
            content={noteitem.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
