"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Note } from "@/app/components/notes";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [inputText, setInputText] = useState("");
  
  const handleAddNote = () => 
  {
    const newNote: Note = { text: inputText };
    setNotes([...notes, newNote]);
    setInputText("");
  };

  return (
    
    <div className="flex justify-center items-center h-screen flex-col">
      <p className="text-[30px]"> Notepad</p>
      <input type="text" placeholder="Write your note" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
      <button className="mt-4" onClick={handleAddNote} >New note</button>
      <div className="notes-container">
      {
        notes.map((note, index) => (
        <div key={index} className="note">{note.text}</div>))
      }
      </div>
    </div>
  );
}
