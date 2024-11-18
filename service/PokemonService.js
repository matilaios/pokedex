import axios from "axios";

function getAllPokemon(){
    return axios.get("https://pokeapi.co/api/v2/pokemon/");
}

export default {
    getAllIPokemon
}