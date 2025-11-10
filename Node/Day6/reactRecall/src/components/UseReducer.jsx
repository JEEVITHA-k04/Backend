import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.value };
    default:
      return state;
  }
};

export const OnOff_inReducer = () => {
  const [state, dispatch] = useReducer(reducer, { input: "" });
  const value = state.input.toUpperCase();

  return (
    <div className="m-3">
      <input
        type="text"
        placeholder="Type ON or OFF"
        value={state.input}
        onChange={(e) =>
          dispatch({ type: "SET_INPUT", value: e.target.value })
        }
        className="border p-2 rounded text-center"
      />

      {/* Conditional Rendering */}
      {value === "ON" ? (
        <div className="w-40 h-40 flex items-center justify-center text-white text-xl font-bold rounded bg-green-500 mt-4">
          ON
        </div>
      ) : value === "OFF" ? (
        <div className="w-40 h-40 flex items-center justify-center text-white text-xl font-bold rounded bg-red-500 mt-4">
          OFF
        </div>
      ) : (
        <div className="w-40 h-40 flex items-center justify-center text-white text-xl font-bold rounded bg-yellow-400 mt-4">
          Normal
        </div>
      )}
    </div>
  );
}




const reducerFun = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.value };
    case "SUBMIT":
      return { ...state, submittedValue: state.input };
    default:
      return state;
  }
};

export const WithBtn_inReducer = () => {
  const [state, dispatch] = useReducer(reducerFun, {
    input: "",
    submittedValue: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
  };

  const value = state.submittedValue.toUpperCase();

  return (
    <div className="m-3">
      <form
        onSubmit={handleSubmit}
        
      >
        <input
          type="text"
          placeholder="Type ON or OFF"
          value={state.input}
          onChange={(e) =>
            dispatch({ type: "SET_INPUT", value: e.target.value })
          }
          className="border p-2 rounded text-center"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded m-4"
        >
          Submit
        </button>
      </form>

      {/* Conditional Rendering */}
      {value === "ON" ? (
        <div className="w-40 h-40 flex items-center justify-center text-white text-xl font-bold rounded bg-green-500">
          ON
        </div>
      ) : value === "OFF" ? (
        <div className="w-40 h-40 flex items-center justify-center text-white text-xl font-bold rounded bg-red-500">
          OFF
        </div>
      ) : (
        <div className="w-40 h-40 flex items-center justify-center text-white text-xl font-bold rounded bg-yellow-400">
          Normal
        </div>
      )}
    </div>
  );
}
