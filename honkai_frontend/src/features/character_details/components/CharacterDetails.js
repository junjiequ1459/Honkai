import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacter } from "../../../store/actions/characterActions";
import "../CSS/CharacterDetails.css";
import GalaxyBackground from "./GalaxyBackground";

function CharacterDetails() {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characters[1]); // selects character based on id from the state

  useEffect(() => {
    dispatch(fetchCharacter(1));
  }, [dispatch]);

  if (!character) {
    return <div>Loading...</div>; // loading screen until useSelector is loaded
  }

  return (
    <>
      {" "}
      <div className="galaxy-background">
        <GalaxyBackground />
      </div>
      <div className="character-details-container">
        <div className="character-stats">
          <h1>{character.name}</h1>
          <p>{character.character_class}</p>
          <p>
            Lv.{character.level}/{character.level}
          </p>
          <p>Stats:</p>
          <ul>
            <li>ATK: {character.stats.attack}</li>
            <li>HP: {character.stats.hp}</li>
            <li>DEF: {character.stats.defense}</li>
            <li>SPD: {character.stats.speed}</li>
            <li>Crit Rate: {character.stats.crit_rate * 100}%</li>
            <li>Crit DMG: {character.stats.crit_dmg * 100}%</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CharacterDetails;
