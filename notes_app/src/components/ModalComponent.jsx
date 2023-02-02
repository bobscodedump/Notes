import { React, useState } from "react";

function ModalComponent({ open, onClose, setData }) {
  if (!open) return null;

  const [inputs, setInputs] = useState({
    description: "",
    note: "",
  });

  const { description, note } = inputs;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    setData(inputs);
    onClose();
  };

  return (
    <div className="overlay fixed w-full h-full bg-waikawa-gray-50 bg-opacity-50 flex justify-center pt-12">
      <div className="modalContainer bg-waikawa-gray-800 max-w-4xl w-full fixed m-auto shadow-2xl mt-12">
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
            <textarea
              name="description"
              rows="1"
              placeholder="Enter Description"
              className="mt-2 ml-3 rounded-sm bg-waikawa-gray-100"
              value={description}
              onChange={(e) => onChange(e)}
            />
          </form>
        </section>
        <section className="note grid justify-center text-center mt-5">
          <h1 className="text-waikawa-gray-100 font-sans text-3xl">Note:</h1>
          <form>
            <textarea
              name="note"
              cols="70"
              rows="10"
              placeholder="Enter Note"
              className="mt-1.5 ml-3 rounded-sm bg-waikawa-gray-100"
              value={note}
              onChange={(e) => onChange(e)}
            />
          </form>
        </section>
        <div className="flex justify-center">
          <button
            className="bg-waikawa-gray-200 text-2xl rounded-md p-1 font-sans hover:bg-waikawa-gray-50 m-2 mb-4 shadow-xl"
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
