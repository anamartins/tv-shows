import { describe, expect, it } from "vitest";
import { formatEpisode } from "./format";

describe("format", () => {
  it("should return the correct info about the episode", () => {
    const apiEpisode = {
      id: 657308,
      url: "https://www.tvmaze.com/episodes/657308/the-powerpuff-girls-1x01-escape-from-monster-island",
      name: "Escape from Monster Island",
      season: 1,
      number: 1,
      type: "regular",
      airdate: "2016-04-04",
      airtime: "18:00",
      airstamp: "2016-04-04T22:00:00+00:00",
      runtime: 11,
      rating: {
        average: null,
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/53/132617.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/53/132617.jpg",
      },
      summary:
        "<p>Bubbles wins two tickets to a concert and has to pick between Blossom and Buttercup to go with her. Meanwhile, the Mayor's plane goes down over Monster Island and it's up to the girls to rescue him.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/657308",
        },
        show: {
          href: "https://api.tvmaze.com/shows/6771",
          name: "The Powerpuff Girls",
        },
      },
    };

    const episode = {
      id: 657308,
      url: "https://www.tvmaze.com/episodes/657308/the-powerpuff-girls-1x01-escape-from-monster-island",
      name: "Escape from Monster Island",
      season: 1,
      number: 1,
      type: "regular",
      airdate: "2016-04-04",
      airtime: "18:00",
      airstamp: "2016-04-04T22:00:00+00:00",
      runtime: 11,
      rating: {
        average: null,
      },
      image:
        "https://static.tvmaze.com/uploads/images/original_untouched/53/132617.jpg",
      summary:
        "Bubbles wins two tickets to a concert and has to pick between Blossom and Buttercup to go with her. Meanwhile, the Mayor's plane goes down over Monster Island and it's up to the girls to rescue him.",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/657308",
        },
        show: {
          href: "https://api.tvmaze.com/shows/6771",
          name: "The Powerpuff Girls",
        },
      },
    };

    expect(formatEpisode(apiEpisode)).toEqual(episode);
  });
});
