import React, { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { RiCloseCircleLine } from "react-icons/ri";
import styled from "styled-components";

const ShoppingStyle = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ShoppingTextStyle = styled.div`
  margin-right: auto;
`;

const CheckboxStyle = styled.input`
  // margin-right: 10px;
  // cursor: pointer;
`;

function Product({ myShoppingList, completeProduct, removeProduct }) {
  return myShoppingList.map((product, index) => (
    <ShoppingStyle
      className={
        product.isComplete
          ? "line-through-on shoppingList-row"
          : "line-through-off shoppingList-row"
      }
      key={index}
    >
      <ShoppingTextStyle
        key={product.id}
        onClick={() => completeProduct(product.id)}
      >
        {product.text}
      </ShoppingTextStyle>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeProduct(product.id)}
          className="delete-icon"
        />
        <CheckboxStyle
          type="checkbox"
          checked={product.isComplete}
          className="edit-checkbox"
          onChange={() => completeProduct(product.id)}
        />
      </div>
    </ShoppingStyle>
  ));
}

export default Product;
