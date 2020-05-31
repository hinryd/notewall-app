import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Input from './Input';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Input onAdd={addNote} />
      {notes.map((x, index) => (
        <Note
          key={index}
          id={index}
          title={x.title}
          content={x.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
