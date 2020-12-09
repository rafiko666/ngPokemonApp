export class Pokemon {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;
    constructor(pokemon) {
        this.id = pokemon.id || null
        this.hp = pokemon.hp || null
        this.cp = pokemon.cp || null
        this.name = pokemon.name || ""
        this.picture = pokemon.picture || ""
        this.created = pokemon.created || null
    }
}