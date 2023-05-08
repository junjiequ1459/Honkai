import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacter } from "../../../store/actions/characterActions";

function CharacterDetails() {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characters[1]);

  useEffect(() => {
    dispatch(fetchCharacter(1));
  }, [dispatch]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Class: {character.character_class}</p>
      <p>Level: {character.level}</p>
      <p>Stats:</p>
      <ul>
        <li>Attack: {character.stats.attack}</li>
        <li>HP: {character.stats.hp}</li>
        <li>Defense: {character.stats.defense}</li>
        <li>Speed: {character.stats.speed}</li>
        <li>Crit Rate: {character.stats.crit_rate}</li>
        <li>Crit DMG: {character.stats.crit_dmg}</li>
      </ul>
      <p>Skills:</p>
      <ul>
        {character.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <p>Traces:</p>
      <ul>
        {character.traces.map((trace) => (
          <li key={trace.name}>
            {trace.name}: {trace.effect}
          </li>
        ))}
      </ul>
      <p>Eidolons:</p>
      <ul>
        {Object.entries(character.eidolons).map(([name, level]) => (
          <li key={name}>
            {name}: {level}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetails;
