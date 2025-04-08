import { json } from '@sveltejs/kit';
import axios from 'axios';

export async function GET({params}) {
try{
    cosnt response = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${params.id}`);

}
}
