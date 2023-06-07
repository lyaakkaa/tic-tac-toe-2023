import { useState } from "react";

import Button from "./components/Button";
import Zagruzka from "./components/Zagruzka";

export default function App() {
  const [user, setUser] = useState(true);

  const longList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function handleChangeUser() {
    setUser(!user);

    console.log(user);
  }

  const listItems = longList.map((listItem, index) => (
    <Button key={listItem} handleChangeUser={handleChangeUser}>
      {listItem} {index}
    </Button>
  ));


  return (
    <>
      <div className="tesst1">
        {listItems}
        <h1 className="text-3xl font-bold underline">hello world</h1>
        {user? <Button handleChangeUserr={handleChangeUser}></Button>: <Zagruzka></Zagruzka>}
      </div>
    </>
  )
}
