interface EndGamePopupProps {
  isWin: boolean;
  word: string;
  restartHandler: () => void;
}

const EndGamePopup: React.FC<EndGamePopupProps> = ({
  isWin,
  word,
  restartHandler,
}) => {
  return (
    <div>
      {isWin ? <p>Вы выиграли!</p> : <p>Вы проиграли!</p>}
      <p>Загаданное слово: {word}</p>
      <button onClick={restartHandler}>Заново</button>
    </div>
  );
};

export default EndGamePopup;
