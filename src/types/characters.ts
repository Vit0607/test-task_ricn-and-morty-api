type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CharactersResponse = {
  results: CharacterType[];
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
};
