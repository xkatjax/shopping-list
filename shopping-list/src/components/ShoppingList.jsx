import React, { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import Product from "./Product";

function ShoppingList() {
  const [myShoppingList, setMyShoppingList] = useState([]);

  const addProduct = (product) => {
    if (!product.text || /^\s*$/.test(product.text)) {
      return;
    }

    const newProducts = [product, ...myShoppingList];

    setMyShoppingList(newProducts);
    // console.log(product, ...myShoppingList);
  };

  const removeProduct = (id) => {
    const removeArr = [...myShoppingList].filter(
      (product) => product.id !== id
    );

    setMyShoppingList(removeArr);
  };

  const completeProduct = (id) => {
    let updatedShoppingList = myShoppingList.map((product) => {
      if (product.id === id) {
        product.isComplete = !product.isComplete;
      }
      return product;
    });
    setMyShoppingList(updatedShoppingList);
  };

  return (
    <div>
      <h1>What do I need to buy?</h1>
      <ShoppingListForm onSubmit={addProduct} />
      <Product
        myShoppingList={myShoppingList}
        completeProduct={completeProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
}

export default ShoppingList;
