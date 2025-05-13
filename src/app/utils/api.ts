import { slugify } from "./string";
import { formatEpisode } from "./format";

import { Episode, ApiEpisode, Show, ApiShow, Season } from "../types";

// this function gets an show id and returns on object with the show data
export async function getShowById(id: string): Promise<Show> {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show: ApiShow = await res.json();
  const seasons = await getShowSeasonsById(id);
  const seasonsId = seasons.map((s) => s.id);

  return { ...show, slug: slugify(show.name), seasonsId };
}

//this function gets an show id and returns an array with all episodes from that show
export async function getShowEpisodesById(id: string): Promise<ApiEpisode[]> {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  const episodes: ApiEpisode[] = await res.json();

  return episodes;
}

// this function gets an show id and returns an array of arrays; each array has all the episodes from a season
export async function getShowEpisodesBySeasonsId(
  seasonsId: number[],
): Promise<Season[][]> {
  const episodesList = await Promise.all(
    seasonsId.map((id) => getShowEpisodesInSeasonsById(id)),
  );

  return episodesList;
}

// this function gets an season id and returns an array with info from all the seasons of the show; each item of the array is a season
export async function getShowSeasonsById(id: string): Promise<Season[]> {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`);
  const seasons: Season[] = await res.json();

  return seasons;
}

// this funtion gets a season id and if the season has episodes, returns all the episodes from this season. if the season has no episodes, returns an empty array.
export async function getShowEpisodesInSeasonsById(
  seasonId: number,
): Promise<Season[] | []> {
  let mappedEpisodes: Season[] | [] = [];

  try {
    const res = await fetch(
      `https://api.tvmaze.com/seasons/${seasonId}/episodes`,
    );
    const episodes = await res.json();
    mappedEpisodes = episodes.map((ep) => formatEpisode(ep));
    mappedEpisodes = mappedEpisodes.filter((ep) => ep.number); //this removes special episodes, which doesn't have an episode number
  } catch (error) {
    console.log(error); //to-do: handle error in the UI
  } finally {
    return mappedEpisodes;
  }
}

// this function gets an show id, a season and a episode number and returns an object with the episode info and a normalized summary and an episode image
export async function getShowEpisodeByNumber(
  showId,
  season,
  episode,
): Promise<Episode> {
  const res = await fetch(
    `https://api.tvmaze.com/shows/${showId}/episodebynumber?season=${season}&number=${episode}`,
  );
  const data = await res.json();

  return formatEpisode(data);
}
