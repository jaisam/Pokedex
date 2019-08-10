import { Component, OnInit, Input } from '@angular/core';
import * as localPokemonDataTS from '../pokemonData.json';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  // @Input() id : number;
  // @Input() name : string;
  // @Input() Attack : number;
  @Input() pokemonData;
  constructor() { }

  ngOnInit() {
    console.log("hello");
    console.log(this.pokemonData);
  }

}
