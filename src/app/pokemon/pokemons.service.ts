import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Pokemon } from '../pokemon.model';
import { POKEMONS } from '../shared/list.pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pokemonsUrl = "api/pokemons";
  constructor(private http: HttpClient) { }

  getListPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(() => console.log("fetch pokemons")),
      catchError(this.handleError("Error getListPokemon", []))
    )
  }

  getSinglePokemon(id: string): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap(() => console.log("fetch pokemons")),
      catchError(this.handleError(`Error get pokemon id ${id}`, null))
    )
  }

  getPokemonTypes() {
    return ['Feu', 'Eau', 'Plante', 'Insecte', 'Normal', 'Vol', 'Poison', 'Fée', 'Psy', 'Electrik', 'Combat']
  }

  updatePokemon(pokemon): Observable<Pokemon> {
    const httpOption = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    }

    return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httpOption).pipe(
      tap(() => console.log("update pokemon")),
      catchError(this.handleError(`Error update pokemon id ${pokemon.id}`, null))
    )

  }

  deletePokemon(id): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`;
    const httpOption = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    }

    return this.http.delete<Pokemon>(url, httpOption).pipe(
      tap(() => console.log("update pokemon")),
      catchError(this.handleError(`Error delete pokemon id ${id}`, null))
    )
  }

  searchPokemon(term: string): Observable<Pokemon[]> {
    if (!term.trim()) return of([]);

    return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
      tap(() => console.log("search pokemon")),
      catchError(this.handleError(`Error search pokemon id`, []))
    )
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(error)
      return of(result as T)
    }
  }
}
