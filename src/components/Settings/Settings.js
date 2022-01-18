import React from "react";
import RadioBox from "../RadioBox";
import Counter from "../Counter";
import { CATEGORIES, INITIAL_CARDS_COUNT, PACE } from "../../constants";

const Settings = ({ startGame }) => {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [pace, setPace] = useState(PACE[0]);
  const [cardsCount, setCardsCount] = useState(INITIAL_CARDS_COUNT);

  const onStartGame = () => {
    startGame({ category, pace, cardsCount });
  };

  return (
    <div>
      <h2>Settings</h2>
      <h4>Category:</h4>
      <div>
        {CATEGORIES.map((item) => (
          <RadioBox
            key={item}
            name={item}
            selectedItem={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        ))}
      </div>
      <h4>Amount of Cards:</h4>
      <div>
        <div>
          <Counter cardsCount={cardsCount} onClick={setCardsCount} />
        </div>
      </div>
      <div>
        {PACE.map((item) => (
          <RadioBox
            key={item}
            value={item}
            selectedItem={item}
            onChange={(e) => setPace(e.target.value)}
          />
        ))}
      </div>
      <button onClick={onStartGame}>Start Game</button>
    </div>
  );
};

export default Settings;
