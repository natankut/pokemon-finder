import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { getPokemon } from "@/lib/pokemonAPI";


export default async function PokemonPage({params} : {params: {pokemonName: string}}) {
    //desestructurar
    const {pokemonName} = params;
    const pokemonObject = await getPokemon(pokemonName);

    return (
        <>
            <h1 className="text-4x1 text-bold pt-4">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
            <div className="m-4" style={{position:'relative', width:"300px", height:'300px'}}>
                <PokemonImage 
                    image={pokemonObject.sprites.other['official-artwork'].front_default}
                    name={pokemonName}
                />
            </div>
            <h3>
                Weight: {pokemonObject.weight}
            </h3>
            <div className="flex-col">
                {pokemonObject.stats.map((statObject :any) => {
                    const statName = statObject.stat.name;
                    const statValue=statObject.base_stat;
                    return (
                        <div className="flex items-stretch" style={{width:"500px"}} key={statName}>
                            <h3 className="p-3 w-2/4">{statName}: <span className="text-yellow-600">{statValue}</span></h3>
                            <Progress className="w-2/4 m-auto" value={statValue}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}