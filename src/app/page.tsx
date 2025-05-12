import { getShowById } from "@/app/utils/api";
import ShowsList from "@/app/components/ShowsList/ShowsList";

import styles from "./page.module.css";

export default async function Home() {
  const favShowsId = [
    "6771", //The Powerpuff Girls
    "6508", //Atlanta
    "54914", //Hacks
    "169", //Breaking Bad
    "2504", //Goede Tijden, Slechte Tijden
    "81591", //Scars of Bauty
    "16427", //A Favorita
    "6482", //Hey Arnold!
    "41750", //What If...?
  ];

  const showList = await Promise.all(
    favShowsId.map((showId) => getShowById(showId)),
  );

  return (
    <main className={styles.main}>
      <ShowsList shows={showList} />
    </main>
  );
}
