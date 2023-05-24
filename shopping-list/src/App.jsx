import "./App.css";
import styled from "styled-components";
import ShoppingList from "./components/ShoppingList";

const ShoppingListApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 600px;
  background-color: #0f2428;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
`;

function App() {
  return (
    <>
      <ShoppingListApp>
        <ShoppingList />
      </ShoppingListApp>
    </>
  );
}

export default App;
