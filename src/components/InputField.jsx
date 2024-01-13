import React from "react";
import "./Style.css";

const InputField = ({ todo, setTodo, handleAdd }) => {
  return (
    <div className="input__field">
      <form
        onSubmit={handleAdd}
        action="
    "
      >
        <input
          type="text"
          placeholder="Add Items"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn">Click me</button>
      </form>
    </div>
  );
};

export default InputField;
