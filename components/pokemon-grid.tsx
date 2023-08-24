"use client"
import { Label } from "./ui/label"
import {Input} from "./ui/input"
import { useState } from "react"
import { PokemonCard } from "./pokemon-card";

interface PokemonGridProps {
  pokemonList:any
}

export function PokemonGrid( {pokemonList} : PokemonGridProps) {

  const [searchText, setSearchText] = useState("");

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter(
      (pokemon:any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    )
  };

  const filterdPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div>
        <h3 className="text-2x1 py-6">Search For Your Pokémon</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5"> 
          <Label htmlFor="pokemonName">
            Pokémon Name
          </Label>
          <Input 
            type="text" 
            value={searchText} 
            autoComplete="off"
            id="pokemonName"
            placeholder="Charizard, Pikachu, etc..."
            onChange={(e) => setSearchText(e.target.value) }
          />
        </div>
        <h3 className="text-3x1 pt-12 pb-6 text-center">Pokémon Collection</h3>
        {searchText !== "" && filterdPokemonList.length === 0 && (
        <p className="text-red-600 text-center">No Pokémon found with that name</p>
      )}
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {filterdPokemonList.map((pokemon : any) => {
          return (
            <PokemonCard name={pokemon.name} key={pokemon.name + "Card"} />
          )
        })}
      </div>
    </>
  )
}
