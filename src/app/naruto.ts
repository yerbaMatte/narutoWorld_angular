export interface NarutoCharacter {
  id: number;
  name: string;
  images: string[];
  debut: {
    manga: string;
    anime: string;
    novel: string;
    movie: string;
    game: string;
    ova: string;
    appearsIn: string;
  };
  family: Record<string, string>;
  jutsu: string[];
  natureType: string[];
  personal: {
    status: string;
    kekkeiGenkai: string;
    classification: string;
    jinchūriki: string[];
    titles: string[];
  };
  uniqueTraits: string[];
}
