import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { POKEMONS } from '../shared/list.pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  getListPokemons(): Pokemon[] {
    return POKEMONS;
  }

  getSinglePokemon(id: string): Pokemon {
    const pokemons = this.getListPokemons();
    return pokemons.find((pok) => pok.id === Number(id))
  }

  getPokemonTypes() {
    return ['Feu', 'Eau', 'Plante', 'Insecte', 'Normal', 'Vol', 'Poison', 'Fée', 'Psy', 'Electrik', 'Combat']
  }
}
