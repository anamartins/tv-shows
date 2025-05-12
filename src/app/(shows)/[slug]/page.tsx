import { JSDOM } from "jsdom";
import Link from "next/link";
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
  const show = await getShowById(id);
  const episodes = await getShowEpisodesBySeasonsId(show.seasonsId);

  let summary = "";
  if (show.summary) {
    const dom = new JSDOM(show.summary);
    summary = dom.window.document.querySelector("p").textContent;
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
          summary={summary}
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
