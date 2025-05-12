import EpisodeThumb from "../EpisodeThumb/EpisodeThumb";
import "./EpisodesList.css";

const EpisodesList = ({ showSlug, arr, season }) => {
  return (
    <div className="episodes-list">
      <h2 className="season-title">Season {season}</h2>
      <ul className="episodes">
        {arr.map((ep, index) => (
          <EpisodeThumb showSlug={showSlug} ep={ep} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default EpisodesList;
