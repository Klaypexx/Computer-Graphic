import style from "./HistoryLetters.module.css";

interface HistoryLettersProps {
  dictionary: Record<string, boolean>;
}

const HistoryLetters: React.FC<HistoryLettersProps> = ({ dictionary }) => {
  return (
    <div className={style.historyLettersBox}>
      {Object.keys(dictionary).map((key, i) => {
        const guessedLetter = dictionary[key];
        const isCorrect: boolean | undefined = guessedLetter;
        return (
          <p
            key={i}
            className={
              isCorrect === true
                ? style.correct
                : isCorrect === false
                ? style.incorrect
                : ""
            }
          >
            {key}
          </p>
        );
      })}
    </div>
  );
};

export default HistoryLetters;
