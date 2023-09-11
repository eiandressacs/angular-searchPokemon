export type PokemonData = {
  name:string;
  id:number;
  sprites: {
    front_default: string
  };//vetor com este formato de objeto
  types: {
    slot: number
    type: {
    name: string
    url: string
    }
  }[]
}

