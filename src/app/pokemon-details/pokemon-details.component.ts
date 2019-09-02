import { Component, OnInit, Input } from '@angular/core';
import * as localPokemonDataTS from '../pokemonData.json';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemonDataObject;


  constructor() {
    //console.log(this.pokemonDataObject);
  }

  ngOnInit() {

  }

}
