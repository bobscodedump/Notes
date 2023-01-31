import { React, useState } from "react";

function ModalComponent({ open, onClose }) {
  if (!open) return null;

  const [inputs, setInputs] = useState({
    description: "",
    note: "",
  });

  return (
    <div className="overlay fixed w-full h-full bg-waikawa-gray-50 bg-opacity-50 flex justify-center pt-12">
      <div className="modalContainer bg-waikawa-gray-800 max-w-4xl w-full fixed max-h-5xl h-1/2 m-auto shadow-2xl mt-12">
        <div className="modalHeader flex justify-end">
          <p className="closeBtn p-2 px-3 font-bold text-3xl" onClick={onClose}>
            X
          </p>
        </div>
        <section className="description flex justify-center align-center">
          <h1 className="text-waikawa-gray-100 font-sans text-3xl">
            Description:
          </h1>
          <form>
            <input
              type="text"
              name="description"
              placeholder="Enter Description"
              className="mt-1.5 ml-3"
              value={description}
            />
          </form>
        </section>
        <div className="modalForm"></div>
      </div>
    </div>
  );
}

export default ModalComponent;
