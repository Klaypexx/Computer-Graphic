import { useEffect, useState } from "react";
import "./App.css";
import Drawing from "./components/Drawing/Drawing";
import GuessWord from "./components/GuessWord/GuessWord";
import HistoryLetters from "./components/HistoryLetters/HistoryLetters";
import InputLetters from "./components/InputLetters/InputLetters";
import EndGamePopup from "./components/Popup/EndGamePopup";
import { RUSSIAN_NOUNS } from "./RussianNounce";

function App() {
  const [word, setWord] = useState<string>("");
  const [hint, setHint] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<Record<string, boolean>>(
    {}
  );
  const [guessCount, setGuessCount] = useState<number>(0);
  const [correctGuessCount, setCorrectGuessCount] = useState<number>(0);
  const [isWin, setIsWin] = useState<boolean | undefined>(undefined);
  const [isNewUi, setNewUi] = useState<boolean>(true);

  const setUiHandler = () => {
    setNewUi(!isNewUi);
  };

  const addGuessedLetterHandler = (letter: string) => {
    if (guessedLetters[letter] !== undefined) {
      return;
    }

    let isCorrectLetter = false;
    if (word.toLowerCase().includes(letter.toLowerCase())) {
      const lettersInWord =
        word.toLowerCase().split(letter.toLowerCase()).length - 1;
      isCorrectLetter = true;
      setCorrectGuessCount((prevCount) => prevCount + lettersInWord);
    } else {
      setGuessCount((prevCount) => prevCount + 1);
      if (guessCount > 5) {
        setIsWin(false);
      }
    }

    setGuessedLetters((prevGuessedLetters) => {
      const updatedGuessedLetters = {
        ...prevGuessedLetters,
        [letter]: isCorrectLetter,
      };

      return updatedGuessedLetters;
    });
  };

  const restartHandler = () => {
    setIsWin(undefined);
    setGuessedLetters({});
    setGuessCount(0);
    setCorrectGuessCount(0);
    setRandomWord();
  };

  const setRandomWord = () => {
    const keys = Object.keys(RUSSIAN_NOUNS);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomWord = keys[randomIndex];
    setWord(randomWord);
    setHint(RUSSIAN_NOUNS[randomWord]);
  };

  useEffect(() => {
    setRandomWord();
  }, []);

  useEffect(() => {
    if (word !== "" && correctGuessCount === word.length) {
      setIsWin(true);
    }
  }, [correctGuessCount]);

  return (
    <div className={`container ${isWin !== undefined ? "locked" : ""}`}>
      <div className={`content-box ${isNewUi ? "new-content-box" : ""}`}>
        <button onClick={setUiHandler} className="ui-button">
          Переключить UI
        </button>
        {isNewUi ? (
          <>
            <div className="new-hint-box">
              <p>Вопрос:</p>
              <p className="new-hint-text">{hint}</p>
            </div>
            <div className="new-game-box">
              <div className="new-guessedLetters-box">
                <GuessWord word={word} dictionary={guessedLetters} />
              </div>
              <p className="new-history-header-text">Использованные буквы:</p>
              <div className="new-history-box">
                <HistoryLetters dictionary={guessedLetters} />
              </div>
              <div className="new-guess-count-box">
                <p>Осталось попыток: {7 - guessCount}</p>
              </div>
            </div>
            <div className="new-input-letter-box">
              <InputLetters
                dictionary={guessedLetters}
                newUi={isNewUi}
                addGuessedLetter={addGuessedLetterHandler}
              />
            </div>
          </>
        ) : (
          <>
            <div className="hint-box">
              <p>{hint}</p>
            </div>
            <div className="game-box">
              <div className="draw-box">
                <Drawing numberOfGuesses={guessCount} />
              </div>
              <div className="guessedLetters-box">
                <GuessWord word={word} dictionary={guessedLetters} />
              </div>
            </div>
            <div className="InputLetters-box">
              <InputLetters
                dictionary={guessedLetters}
                newUi={isNewUi}
                addGuessedLetter={addGuessedLetterHandler}
              />
            </div>
          </>
        )}
        {isWin !== undefined ? (
          <div className="popup-overlay">
            <div className="popup-box">
              <EndGamePopup
                isWin={isWin}
                word={word}
                restartHandler={restartHandler}
              />
            </div>
          </div>
        ) : undefined}
      </div>
    </div>
  );
}

export default App;
