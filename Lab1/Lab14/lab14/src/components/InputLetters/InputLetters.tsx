import React from "react";
import style from "./InputLetters.module.css";

const RussianLettersAlphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
];

interface WordsProps {
  dictionary: Record<string, boolean>;
  newUi: boolean;
  addGuessedLetter: (letter: string) => void;
}

const InputLetters: React.FC<WordsProps> = ({
  dictionary,
  newUi,
  addGuessedLetter,
}) => {
  return (
    <div className={style.wordsContainer}>
      {RussianLettersAlphabet.map((letter, i) => {
        const guessedLetter = dictionary[letter];
        const isCorrect: boolean | undefined = guessedLetter;

        return (
          <div key={i} className={newUi ? style.newWordBox : style.wordBox}>
            <p
              onClick={() => addGuessedLetter(letter)}
              className={
                isCorrect === true
                  ? style.correct
                  : isCorrect === false
                  ? style.incorrect
                  : ""
              }
            >
              {letter}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default InputLetters;
