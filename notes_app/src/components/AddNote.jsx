import { React } from "react";

function AddNote({ openModal }) {
  return (
    <div className="grid content-center mx-auto max-w-xl">
      <button
        className="bg-waikawa-gray-300 hover:bg-waikawa-gray-50 rounded-md p-3 h-20 w-80 font-serif text-3xl shadow-xl -z-1"
        onClick={openModal}
      >
        Add Note
      </button>
    </div>
  );
}

export default AddNote;
