import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacter } from "../../../store/actions/characterActions";
import MoreStatsModal from "./MoreStatsModal";
import ElementsModal from "./ElementsModal";
import LevelUpModal from "./LevelUpModal";
import GalaxyBackground from "./GalaxyBackground";


function CharacterStats() {
  const dispatch = useDispatch();
  const characterNumber = useSelector((state) => state.navbar);
  const character = useSelector(
    (state) => state.characters[characterNumber.number]
  ); // selects character based on id from the state
  const [isStatsButtonActive, setIsStatsButtonActive] = useState(true); // Track the active state

  useEffect(() => {
    dispatch(fetchCharacter(characterNumber.number));
  }, [dispatch, characterNumber]);

  if (!character) {
    return <div>Loading...</div>; // loading screen until useSelector is loaded
  }

  const statsButtonClassName = isStatsButtonActive
    ? "stats-button stats-button-active"
    : "stats-button";

  return (
    <>
      <GalaxyBackground />

      <div className="character-details-container">
        <div className="character-stats">
          <h1>{character.name}</h1>
          <div class="level-search-container">
            <p>{character.character_class}</p>
            <ElementsModal />
          </div>
          <div class="level-search-container">
            <div>
              Lv.{character.level}/{character.level}
            </div>
            <LevelUpModal />
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
