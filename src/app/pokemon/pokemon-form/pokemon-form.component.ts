import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon.model';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: Array<string>;
  constructor(private router: Router, private pokemonService: PokemonsService) {

  }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypes();
  }

  hasType(type: string) {
    const index = this.pokemon.types.indexOf(type)
    return (index > -1) ? true : false;
  }

  selectType($event, type: string) {
    const checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type)
    } else {
      const index = this.pokemon.types.indexOf(type)
      if (index > -1) {
        this.pokemon.types.splice(index, 1)
      }
    }
  }

  isTypeValide(type:string):boolean{
    if(this.pokemon.types.length ===1 && this.hasType(type)) return false;
    if(this.pokemon.types.length ===3 && !this.hasType(type)) return false;
    return true;
  }

  onSubmit() {
    this.router.navigate(['pokemon/' + this.pokemon.id])
  }

}
