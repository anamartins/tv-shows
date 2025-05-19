// an APIEpisode is that one that comes from the API request
export type ApiEpisode = {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number | null;
  };
  image: Image | null;
  summary: string;
  _links: {
    self: {
      href: string;
    };
    show: {
      href: string;
      name: string;
    };
  };
};

// an Episode is the result of the formatEpisode function; it has a different type of image and the summary doesn't have HTML tags
export type Episode = {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number | null;
  };
  image: string;
  summary: string;
  _links: {
    self: {
      href: string;
    };
    show: {
      href: string;
      name: string;
    };
  };
  status?: number;
};

// a Season has all information about an specific season from an specific show, except the episodes.
export type Season = {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: Network | null;
  webChannel: WebChannel | null;
  image: Image | null;
  summary: string;
  _links: {
    self: {
      href: string;
    };
  };
};

// an APIShow is that one that comes from the API request
export type ApiShow = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string | null;
  officialSite: string;
  schedule: Date;
  rating: {
    average: number | null;
  };
  weight: number;
  network: Network | null;
  webChannel: WebChannel | null;
  dvdCountry: null;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: Image | null;
  summary: string | null;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
      name: string;
    };
    nextepisode: {
      href: string;
      name: string;
    };
  };
};

// a Show is the one with all info from ApiShow and also a slug and a seasons id array
export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string | null;
  officialSite: string;
  schedule: Date;
  rating: {
    average: number | null;
  };
  weight: number;
  network: Network | null;
  webChannel: WebChannel | null;
  dvdCountry: null;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: Image | null;
  summary: string | null;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
      name: string;
    };
    nextepisode: {
      href: string;
      name: string;
    };
  };
  slug: string;
  seasonsId: number[];
};

type Image = {
  medium: string;
  original: string;
};

type Date = {
  time: string;
  days: string[];
};

type Network = {
  id: number;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  };
  officialSite: string | null;
};

type WebChannel = {
  id: number;
  name: string;
  country: string | null;
  officialSite: string;
};
