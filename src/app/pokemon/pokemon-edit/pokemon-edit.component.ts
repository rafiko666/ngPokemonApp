import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/pokemon.model';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {
  singlePokemon: Pokemon = null;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonsService) {
    const id = this.route.snapshot.paramMap.get('id')
    this.pokemonService.getSinglePokemon(id).subscribe((pokemon) => {
      this.singlePokemon = pokemon
    })
  }

  ngOnInit(): void {
  }

}
