import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Pokemon } from 'src/app/pokemon.model';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {
  private searchTerm = new Subject();
  pokemons$: Observable<Pokemon[]>;
  constructor(private router: Router, private pokemonService: PokemonsService) {

  }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) =>
        this.pokemonService.searchPokemon(term)
      )
    )
  }

  search(term: string): void {
    this.searchTerm.next(term);
  }

  gotoDetail(pokemon) {
    this.router.navigate(['/pokemon/' + pokemon.id])
  }

}
