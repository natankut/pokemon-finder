// const POKEMON_API = "https://pokeapi.co/api/v2/";

// export async function getPokemonList() {
//     const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
//     const data = await response.json();
//     return data.results;
// }

const POKEMON_API: string = "https://pokeapi.co/api/v2/";

interface Pokemon {
    name: string;
    url: string;
}

export async function getPokemonList(): Promise<Pokemon[]> {
    try {
        const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
        
        if (!response.ok) {
            throw new Error("Failed to fetch Pokemon data");
        }
        
        const data = await response.json();
        
        if (!data || !data.results) {
            throw new Error("Invalid response from the API");
        }
        
        return data.results as Pokemon[];
    } catch (error) {
        console.error("An error occurred while fetching Pokemon data:", error);
        throw error;
    }
}
export async function getPokemon(name:string) {
    const response = await fetch (POKEMON_API + "pokemon/" + name);
    const data = await response.json();
    return data;
}