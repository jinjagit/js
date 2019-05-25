// Board module:
const board = (() => {
  console.log('I am board module!');
  let state = ['', '', '', '', '', '', '', '', ''];
  const addPiece = (piece, index) => { state[index] = piece; };
  const reset = () => { state.fill(''); };
  return { addPiece, state, reset };
})();

console.log(board.state);

console.log((1400/16)*9);
