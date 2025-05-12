import { stripHTML } from "./string";

export function formatEpisode(episode) {
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
