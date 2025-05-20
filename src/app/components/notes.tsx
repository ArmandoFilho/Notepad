"use client"
import React, { useState } from "react";

export type Note = {
  text: string;
  done?: boolean;
};

type NotesProps = 
{
  notes: Note[];
  toggleNote: (index: number) => void;
  updateNoteText: (index: number, newText: string) => void;
};

export function Notes({ notes, toggleNote, updateNoteText }: NotesProps) 
{
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (index: number) => 
  {
    setEditIndex(index);
    setEditText(notes[index].text);
  };

  const handleSaveEdit = () => 
  {
    if (editIndex !== null) 
    {
      updateNoteText(editIndex, editText);
      setEditIndex(null);
      setEditText("");
    }
  };

  return (
    <div className="notes-container">
      {notes.map((note, index) => (
        <div key={index} className={`note ${note.done ? "done" : ""}`}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="edit-input"
              />
              <button onClick={handleSaveEdit}>Save</button>
            </>
          ) : (
            <>
              <span>{note.text}</span>
              <input
                type="checkbox"
                checked={note.done}
                onChange={() => toggleNote(index)}
                className="checkbox"
              />
              <button onClick={() => handleEdit(index)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}