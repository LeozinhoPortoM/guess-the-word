import "./style.css";

export default function StartScreen({ startGame }) {
  return (
    <div className="start">
      <h1>Guess The Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
}
