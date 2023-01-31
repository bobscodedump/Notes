import { useState, Fragment } from "react";
import AddNote from "./components/AddNote";
import ModalComponent from "./components/ModalComponent";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-start bg-waikawa-gray-700">
      <div className="text-center text-7xl py-5 font-serif text-waikawa-gray-50">
        Notes
      </div>
      <AddNote openModal={() => setIsOpen(true)} />
      <ModalComponent open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default App;
