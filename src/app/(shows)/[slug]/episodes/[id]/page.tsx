import Link from "next/link";
import EpisodeInfo from "@/app/components/EpisodeInfo/EpisodeInfo";
import { getShowEpisodeByNumber } from "@/app/utils/api";

import styles from "../../../../page.module.css";

export default async function EpisodePage({ params }) {
  const p = await params;
  const showId = p.slug.split("-").pop();
  const [season, episode] = p.id.split("-");
  const data = await getShowEpisodeByNumber(showId, season, episode);

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">Home</Link> {">"}{" "}
        <Link href={`/${p.slug}`}>{data._links.show.name}</Link> {">"} Season{" "}
        {season}, Episode {episode}
      </nav>
      <main className={styles.main}>
        <EpisodeInfo
          imgSrc={data.image}
          epName={data.name}
          season={season}
          episode={episode}
          airdate={data.airdate}
          summary={data.summary}
        />
      </main>
    </>
  );
}
