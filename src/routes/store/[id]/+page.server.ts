import axios from "axios";


export async function load({ params, fetch }) {

    interface Game {
        id: string;
        name: string;
        description: string;
        price: string | number;
        image: string;
    }
    
    try {
        const gameId = Number(params.id)
        const response = await fetch(`https://store.steampowered.com/api/appdetails?appids=${gameId}`);
        const data = await response.json();
        if (!data) {
            console.error("Unexpected API response structure:", data);
            return {
                status: 500,
                error: "Unexpected API response structure"
            };
        }
        return data[gameId].data;
        
    } catch (error) {
        console.error(error);
        return {
            status: 500,
            error: `Failed to fetch game: ${error}`
        };
    }
}