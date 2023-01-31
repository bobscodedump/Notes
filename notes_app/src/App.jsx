import { useState, Fragment } from "react";
import AddNote from "./components/AddNote";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col justify-start bg-waikawa-gray-700">
      <div className="text-center text-7xl py-5 font-serif text-waikawa-gray-50">
        Notes
      </div>
      <AddNote />
    </div>
  );
}

export default App;
