import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../pokemon.model';
import { POKEMONS } from '../../shared/list.pokemons';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[]
  constructor(private router: Router, private pokemonsService:PokemonsService) { }

  ngOnInit(): void {
    this.pokemonsService.getListPokemons().subscribe((pokemons)=> {
      this.pokemons = pokemons
    })
  }

  selectPokemon(pokemon) {
    this.router.navigate(['/pokemon/' + pokemon.id])
  }

}
