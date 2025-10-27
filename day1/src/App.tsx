import React, { useState } from "react";

const App: React.FC = () => {
  const [name, setName] = useState<string>("");


  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", name);
    setName("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          type="text"
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
