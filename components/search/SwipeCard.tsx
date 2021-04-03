import React, { useState, useMemo } from "react";
import TinderCard from "react-tinder-card";

import styles from "../../styles/components/search/swipeCard.module.scss";

const db = [
  {
    name: "test1",
  },
  {
    name: "test2",
  },
  {
    name: "test3",
  },
  {
    name: "test4",
  },
  {
    name: "test5",
  },
];

const alreadyRemoved = [];
let charactersState = db;

const SwiperCard = () => {
  const [characters, setCharacters] = useState(db);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    charactersState = charactersState.filter((character) => character.name !== name);
    setCharacters(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = characters.filter((person) => !alreadyRemoved.includes(person.name));
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name;
      const index = db.map((person) => person.name).indexOf(toBeRemoved);
      alreadyRemoved.push(toBeRemoved);
      childRefs[index].current.swipe(dir);
    }
  };

  return (
    <div className={styles.cardArea}>
      <div className={styles.flex}>
        <div className={styles.container}>
          {characters.map((character, index) => (
            <TinderCard
              className={styles.swipe}
              ref={childRefs[index]}
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div className={styles.card}>
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
        <div className={styles.buttons}>
          <button onClick={() => swipe("left")}>Swipe left!</button>
          <button onClick={() => swipe("right")}>Swipe right!</button>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
