import { slugify } from "./string";
import { formatEpisode } from "./format";

export async function getShowById(id: string) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  const seasons = await getShowSeasonsById(id);
  const seasonsId = seasons.map((s) => s.id);

  return { ...show, slug: slugify(show.name), seasonsId };
}

export async function getShowEpisodesById(id: string) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  const episodes = await res.json();

  return episodes;
}

export async function getShowEpisodesBySeasonsId(seasonsId: number[]) {
  const episodesList = await Promise.all(
    seasonsId.map((id) => getShowEpisodesInSeasonsById(id)),
  );
  return episodesList;
}

export async function getShowSeasonsById(id: string) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`);
  const seasons = await res.json();

  return seasons;
}

export async function getShowEpisodesInSeasonsById(seasonId) {
  let mappedEpisodes = [];

  try {
    const res = await fetch(
      `https://api.tvmaze.com/seasons/${seasonId}/episodes`,
    );
    const episodes = await res.json();

    mappedEpisodes = episodes.map((ep) => formatEpisode(ep));
  } catch (error) {
    console.log(error); //to-do: handle error in the UI
  } finally {
    return mappedEpisodes;
  }
}

export async function getShowEpisodeByNumber(showId, season, episode) {
  const res = await fetch(
    `https://api.tvmaze.com/shows/${showId}/episodebynumber?season=${season}&number=${episode}`,
  );
  const data = await res.json();

  return formatEpisode(data);
}
