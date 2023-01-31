import { useState, Fragment } from "react";
import AddNote from "./components/AddNote";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen grid place-content-center bg-waikawa-gray-700">
      <div className="text-center text-7xl py-5 font-serif text-waikawa-gray-50">
        Notes
      </div>
      <div className="bg-emerald-500 w-52 h-52 rounded-full shadow-2xl grid place-content-center">
        <div className="bg-teal-200 w-32 h-32 rounded-full grid place-content-center"></div>
      </div>
      <AddNote />
    </div>
  );
}

export default App;
