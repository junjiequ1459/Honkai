import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacter } from "../../../store/actions/characterActions";
import MoreStatsModal from "./MoreStatsModal";
import ElementsModal from "./ElementsModal";
function CharacterStats() {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characters[1]); // selects character based on id from the state
  const [isStatsButtonActive, setIsStatsButtonActive] = useState(true); // Track the active state

  useEffect(() => {
    dispatch(fetchCharacter(1));
  }, [dispatch]);

  if (!character) {
    return <div>Loading...</div>; // loading screen until useSelector is loaded
  }

  const statsButtonClassName = isStatsButtonActive
    ? "stats-button stats-button-active"
    : "stats-button";

  return (
    <>
      s
      <div className="character-details-container">
        <div className="character-stats">
          <h1>{character.name}</h1>
          <p>{character.character_class}</p>
          <div class="level-search-container">
            <div>
              Lv.{character.level}/{character.level}
            </div>
            <ElementsModal />
          </div>

          <div className="character-stats-buttons">
            <button
              className={statsButtonClassName}
              onClick={() => setIsStatsButtonActive(!isStatsButtonActive)}
            >
              <div className="stats-skills-container">
                <span class="left">Stats</span>
                <span class="right">Skills</span>
              </div>
            </button>
            <div class="bar"></div>
          </div>

          {isStatsButtonActive && (
            <ul>
              <li>ATK: {character.stats.attack}</li>
              <li>HP: {character.stats.hp}</li>
              <li>DEF: {character.stats.defense}</li>
              <li>SPD: {character.stats.speed}</li>
              <li>Crit Rate: {character.stats.crit_rate * 100}%</li>
              <li>Crit DMG: {character.stats.crit_dmg * 100}%</li>
            </ul>
          )}
          {!isStatsButtonActive && (
            <ul>
              <li>Skill 1</li>
            </ul>
          )}
        </div>
        <MoreStatsModal />
      </div>
    </>
  );
}

export default CharacterStats;
