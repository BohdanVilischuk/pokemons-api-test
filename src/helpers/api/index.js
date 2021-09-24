import {API} from "../constants";
import axios from 'axios'

export const getPokemons = (page, callback) => {
    const promises = [];
    for (let i = 1; i <= page; i++) {
        const url = API.BACKEND_BASE_POKEMON_URL + i;
        promises.push(axios.get(url).then(response => response.data));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(' ').split(' '),
            id: result.id,
            weight: result.weight,
            height: result.height,
            moves: result.moves,
            stats: {
                name: result.stats.map(stat => stat.stat.name),
                value: result.stats.map(stat => stat.base_stat),
            }
        }));
        callback(pokemon)
    });
};