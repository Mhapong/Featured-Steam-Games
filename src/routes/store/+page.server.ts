import axios from "axios";

export async function load({ fetch }) {
  interface Game {
    id: number;
        name: string;
        description: string;
        original_price: number;
        price: number;
        image: string;
        discount: number;
        genres: Array<string>;
  }

  interface GameResponse {
    game: Game[];
    error?: string;
  }

  const fetchGames = async () => {
    try{
    const response  = await fetch("/api/steam")
    const data : GameResponse = await response.json()
    return data.game ;

  } catch (error) {
    return{
      game: [] as Game[],
      error: `Failed to fetch games: ${error}`
    }
  }

  }
  return {data: await fetchGames()}
};
