import style from "./GuessWord.module.css";

interface WordsProps {
  word: string;
  dictionary: Record<string, boolean>;
}

const GuessWord: React.FC<WordsProps> = ({ word, dictionary }) => {
  return (
    <div className={style.wordBox}>
      {Array.from(word.toLowerCase()).map((letter, i) => {
        const guessedLetter = dictionary[letter.toUpperCase()];
        const isGuessed: boolean = guessedLetter;
        return (
          <div key={i}>
            <div className={style.letterBox}>
              <p className={style.letter}>{isGuessed ? letter : ""}</p>
              <div className={style.letterBorder}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GuessWord;
