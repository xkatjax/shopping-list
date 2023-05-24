import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const ShoppingFormStyle = styled.form`
  margin-bottom: 32px;
`;

const ShoppingButtonStyle = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(125, 218, 233, 1) 0%,
    rgba(140, 240, 250, 1) 100%
  );
  color: #fff;
  text-transform: capitalize;
`;

const ShoppingInputStyle = styled.input`
  background-color: transparent;
  border-radius: 4px 0 0 4px;
  padding: 14px 32px 14px 16px;
  border: 2px solid #7ddae9;
  outline: none;
  width: 320px;
  color: #fff;
`;

function ShoppingListForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <ShoppingFormStyle onSubmit={handleSubmit}>
      <ShoppingInputStyle
        type="text"
        placeholder="Add a product"
        value={input}
        name="text"
        className="shoppingList-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <ShoppingButtonStyle>Add</ShoppingButtonStyle>
    </ShoppingFormStyle>
  );
}

export default ShoppingListForm;
