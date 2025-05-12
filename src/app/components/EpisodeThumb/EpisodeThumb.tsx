import Image from "next/image";
import Link from "next/link";
import "./EpisodeThumb.css";

const EpisodeThumb = ({ showSlug, ep }) => {
  return (
    <li className="episode">
      <Link href={`${showSlug}/episodes/${ep.season}-${ep.number}`}>
        <Image
          className="episode-image"
          src={ep.image}
          alt={`thumbnail from the episode ${ep.number} season ${ep.season} - ${ep.name}`}
          width={300}
          height={200}
        />
        <h3 className="episode-name">{ep.name}</h3>
        <p className="episode-summary">{ep.summary}</p>
      </Link>
    </li>
  );
};

export default EpisodeThumb;
