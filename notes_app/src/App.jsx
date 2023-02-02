import { useState, Fragment } from "react";
import AddNote from "./components/AddNote";
import ModalComponent from "./components/ModalComponent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [noteArray, setNoteArray] = useState([]);
  const setData = (data) => {
    noteArray.push(data);
    setNoteArray(noteArray);
    console.log(noteArray);
  };

  return (
    <div className="min-h-screen flex flex-col justify-start bg-waikawa-gray-700">
      <div className="text-center text-7xl py-5 font-serif text-waikawa-gray-50">
        Notes
      </div>
      <AddNote openModal={() => setIsOpen(true)} />
      <ModalComponent
        open={isOpen}
        onClose={() => setIsOpen(false)}
        setData={setData}
      />
      <div className="flex justify-center flex-auto mx-auto mt-10 gap-4">
        {noteArray.map((obj) => (
          <div className="bg-emerald-300 m-10 p-3 rounded-md">
            <h1>{obj.description}</h1>
            <p>{obj.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
