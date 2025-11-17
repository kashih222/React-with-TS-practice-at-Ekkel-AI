// NoteProvider.tsx
import React, { useState } from "react";
import NoteContext, { INote } from "./NoteContext";

const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const host = "http://localhost:5000";

  const [notes, setNotes] = useState<INote[]>([]);

  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkxMmZlN2Q1YjlmNzY1MjdiYTkwOTU2In0sImlhdCI6MTc2Mjg1MjQ3N30.mwWMmaWuwUslnTzwOZPglsHt3YxBP45s3t8_vBev9c0";

  //  ADD NOTE
  const addNote = async (
    title: string,
    description: string,
    tag: string
  ): Promise<void> => {
    const response = await fetch(`${host}/api/note/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const newNote = await response.json();

    // Update UI immediately
    setNotes((prev) => [...prev, newNote]);
  };

  // DELETE NOTE
  const handleDelete = async (id: string): Promise<void> => {
    console.log(id)
    await fetch(`${host}/api/note/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });

    // Remove from UI
    setNotes((prev) => prev.filter((note) => note._id !== id));
  };

  // UPDATE NOTE
  const handleUpdate = async (
    id: string,
    title: string,
    description: string,
    tag: string
  ): Promise<void> => {
    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const updatedNote = await response.json();
    console.log(updatedNote)
    
    // Update UI
    setNotes((prev) =>
      prev.map((n) =>
      n._id === id ? { ...n, ...updatedNote } : n
    ));
    console.log(notes)

     
    // Remove from UI
    setNotes((prev) => prev.filter((note) => note._id !== id));
  };

  const handleGet = async (): Promise<void> => {
    
    const responce = await fetch(`${host}/api/note/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const allNotes = await responce.json();
    setNotes(allNotes);


  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, handleDelete, handleUpdate, handleGet }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
