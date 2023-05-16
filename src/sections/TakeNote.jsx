import { React, useState, useEffect } from "react";
import placeholderAvatar from "../assets/placeholder-avatar.jpg";
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
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function TakeNote() {
  const [avatar, setAvatar] = useState(placeholderAvatar);
  const [fetching, setFetching] = useState(true);
  const [user, loading] = useAuthState(auth);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  //reading data
  const getData = async () => {
    if (loading) return;
    if (!user) return navigate("/");
    setAvatar(user.photoURL);
    const collectionRef = collection(db, `${user.uid}`);
    const q = query(collectionRef, orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    setFetching(false);
    return unsubscribe;
  };

  //write to database
  const addNote = async (newNote) => {
    const collectionRef = collection(db, `${user.uid}`);
    await addDoc(collectionRef, {
      timestamp: serverTimestamp(),
      title: newNote.title,
      content: newNote.content,
      username: user.displayName,
    });
  };
  //deleting data
  const deleteNote = async (id) => {
    const docRef = doc(db, `${user.uid}`, id);
    await deleteDoc(docRef);
  };
  //update notes
  const updateNote = async (id,title,content) => {
    const docRef = doc(db, `${user.uid}`, id);
    const updatedNotes = {
      title: title,
      content: content
    };
    await updateDoc(docRef, updatedNotes);
  }
  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div className="app min-h-screen relative flex flex-col gap-4 bg-zinc-100 dark:bg-zinc-900">
      <Header avatar={avatar} />
      <CreateArea onAdd={addNote} />
      {fetching ? (
        <div
          className="inline-block h-10 md:h-14 w-10 md:w-14 my-4 mx-auto animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] dark:text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:gap-4 flex-wrap my-6 items-center justify-center">
          {notes.map((noteitem, index) => (
            <Note
              key={index}
              id={noteitem.id}
              title={noteitem.title}
              content={noteitem.content}
              onDelete={deleteNote}
              onUpdate={updateNote}
            />
          ))}
        </div>
      )}
    </div>
  );
}
