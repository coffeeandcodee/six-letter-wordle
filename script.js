const state = {
  //Initializing grid to empty 6 x 6 grid
  grid: Array(6)
    .fill()
    .map(() => Array(6).fill("")),
  currentRow: 0,
  currentCol: 0,
};

function startup() {}
startup();
