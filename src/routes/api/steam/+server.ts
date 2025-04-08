import { json } from '@sveltejs/kit';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://store.steampowered.com/api/featured');
    const featuredWin = response.data.featured_win || [];

    return json({
      game: featuredWin.map(game => ({
        id: game.id,
        name: game.name,
        description: game.short_description || "No description available",
        original_price: game.original_price || "Free",
        price: game.final_price || game.price || "Free",
        image: game.large_capsule_image || game.header_image,
        discount: game.discount_percent || 0,
        genres: game.genres || "No genres available",
      }))
    });
  } catch (error) {
    console.error('Error fetching Steam data:', error);
    return json({ error: 'Failed to fetch data from Steam' }, { status: 500 });
  }
}