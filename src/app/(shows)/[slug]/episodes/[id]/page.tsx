import Link from "next/link";
import Error404 from "@/app/pages/404";
import EpisodeInfo from "@/app/components/EpisodeInfo/EpisodeInfo";
import { getShowEpisodeByNumber } from "@/app/utils/api";

import styles from "../../../../page.module.css";

export default async function EpisodePage({ params }) {
  const p = await params;
  const showId = p.slug.split("-").pop();
  const [season, episode] = p.id.split("-");

  let episodeInfo;

  try {
    episodeInfo = await getShowEpisodeByNumber(showId, season, episode);
  } catch {
    return <Error404 />;
  }

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">Home</Link> {">"}{" "}
        <Link href={`/${p.slug}`}>{episodeInfo._links.show.name}</Link> {">"}{" "}
        Season {season}, Episode {episode}
      </nav>
      <main className={styles.main}>
        <EpisodeInfo
          imgSrc={episodeInfo.image}
          epName={episodeInfo.name}
          season={season}
          episode={episode}
          airdate={episodeInfo.airdate}
          summary={episodeInfo.summary}
        />
      </main>
    </>
  );
}
