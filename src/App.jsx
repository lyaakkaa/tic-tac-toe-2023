import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Zagruzka from "./components/Zagruzka";
import Grid from "./components/Grid";

function App() {
  const winning = [
    [1, 2, 3], // верхняя горизонтальная линия
    [4, 5, 6], // средняя горизонтальная линия
    [7, 8, 9], // нижняя горизонтальная линия
    [1, 4, 7], // левая вертикальная линия
    [2, 5, 8], // средняя вертикальная линия
    [3, 6, 9], // правая вертикальная линия
    [1, 5, 9], // главная диагональ
    [3, 5, 7] // побочная диагональ
  ];
  

  const [grid, setGrid] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
    { id: 7, text: "" },
    { id: 8, text: "" },
    { id: 9, text: "" },
  ]);
  const [user, setUser] = useState(true);
  const [winner, setWinner] = useState(null);

  function checkWinner(grid) {
    for (let i = 0; i < winning.length; i++) {
      const [a, b, c] = winning[i];
      if (
        grid[a - 1].text &&
        grid[a - 1].text === grid[b - 1].text &&
        grid[a - 1].text === grid[c - 1].text
      ) {
        return grid[a - 1].text; 
      }
    }
    return null;
  }
  

  function handlePlay(elementID) {
    //NO NO push splice pop shift unshift
    //OK map forEach slice  filter find some
    const newGrid = grid.map((item) => {
      if (item.id === elementID && !item.text) {
        return { ...item, text: user ? "X" : "O" };
      } else return item;
    });
    setUser(!user);
    setGrid(newGrid);

    const winner = checkWinner(newGrid);
    if (winner) {
      setWinner(winner); // Устанавливаем победителя
    }
  }

  // if (!user) {
  //   return (
  //     <MainLayout>
  //       <Zagruzka />
  //     </MainLayout>
  //   );
  // }

  return (
    <MainLayout>
      {winner ? (
        <h2>Winner: {winner}</h2>
      ) : (
        <h2>Player turn: {user ? "X" : "O"}</h2>
      )}
      <Grid grid={grid} handlePlay={handlePlay} />
    </MainLayout>
  );
}

export default App;
