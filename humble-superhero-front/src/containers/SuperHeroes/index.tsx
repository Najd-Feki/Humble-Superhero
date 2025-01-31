import React from "react";
import { ISuperhero } from "../../types/ISuperhero";
import SuperHeroCard from "../../components/superHeroes/SuperHeroCard";
import "./index.css";
const SuperHeroesContainer: React.FC<{ superheroes: ISuperhero[] }> = ({
  superheroes,
}) => {
  return (
    <div className="superheroes-container">
      {superheroes.map((superhero) => (
        <SuperHeroCard superhero={superhero} key={superhero.id} />
      ))}
    </div>
  );
};

export default SuperHeroesContainer;
