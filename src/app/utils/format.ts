import { stripHTML } from "./string";
import { ApiEpisode, Episode } from "../types";

//this function gets an episode and returns an episode with a summary without the HTML tags and an episode image if they don't have one
export function formatEpisode(episode: ApiEpisode): Episode {
  let summary = "";
  if (episode.summary) {
    summary = stripHTML(episode.summary);
  }

  let image = "";
  if (!episode.image?.original) {
    image = "/tv.png";
  } else {
    image = episode.image.original;
  }

  return { ...episode, summary, image };
}
