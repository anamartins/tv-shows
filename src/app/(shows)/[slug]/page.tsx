import Link from "next/link";
import Error404 from "@/app/pages/404";
import { getShowById, getShowEpisodesBySeasonsId } from "@/app/utils/api";
import ShowInfo from "@/app/components/ShowInfo/ShowInfo";
import EpisodesList from "@/app/components/EpisodesList/EpisodesList";

import styles from "../../page.module.css";

export default async function ShowPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = await params;
  const id = p.slug.split("-").pop();
  let hasError = false;
  let show, episodes;
  try {
    show = await getShowById(id);
    episodes = await getShowEpisodesBySeasonsId(show.seasonsId);
  } catch (error) {
    hasError = true;
    show = {};
  }

  if (hasError) {
    return <Error404 />;
  }

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">Home</Link> {">"} {show.name}
      </nav>
      <main className={styles.main}>
        <ShowInfo
          name={show.name}
          img={show.image?.original}
          summary={show.summary}
        />
        {episodes.map((arr, index) => (
          <div key={index}>
            <EpisodesList showSlug={p.slug} arr={arr} season={index + 1} />
          </div>
        ))}
      </main>
    </>
  );
}
