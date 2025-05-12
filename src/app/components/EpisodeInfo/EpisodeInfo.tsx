import Image from "next/image";
import "./EpisodeInfo.css";

const EpisodeInfo = ({ imgSrc, epName, season, episode, airdate, summary }) => {
  return (
    <div className="episode-info">
      <h1 className="episode-name">
        S{season}E{episode}: {epName}
      </h1>
      <Image
        className="episode-image"
        src={imgSrc}
        priority
        alt={`Image from episode ${episode} season ${season}: ${epName}`}
        width={1000}
        height={500}
      />
      <p>aired in {airdate}</p>
      <p className="episode-summary">{summary}</p>
    </div>
  );
};

export default EpisodeInfo;
