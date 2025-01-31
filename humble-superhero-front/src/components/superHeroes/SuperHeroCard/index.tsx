import { ISuperhero } from "../../../types/ISuperhero";
import "./index.css";
import Wave from "./Wave";
const SuperHeroCard: React.FC<{ superhero: ISuperhero }> = ({
  superhero: { name, humilityScore, superpower },
}) => {
  const waveColor =
    humilityScore > 7
      ? "wave-green"
      : humilityScore < 4
      ? "wave-red"
      : "wave-yellow";

  return (
    <div className="e-card playing">
      <div className="image"></div>

      <div className={`wave ${waveColor}`}></div>
      <div className={`wave ${waveColor}`}></div>
      <div className={`wave ${waveColor}`}></div>

      <div className="infotop">
        <Wave />
        <br />
        <p className="hero-name">{name}</p>
        <br />
        <p className="name">Super power: {superpower}</p>
        <p className="name">Humility Score: {humilityScore}</p>
      </div>
    </div>
  );
};

export default SuperHeroCard;
