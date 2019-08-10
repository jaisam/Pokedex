import {Component, OnInit} from '@angular/core';
import * as localPokemonDataTs from '../pokemonData.json';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
pokemon;
  constructor() {
    this.pokemon=localPokemonDataTs.pokemonData;
    // console.log(typeof  this.pokemon);
    // console.log(localPokemonDataTs.pokemonData[0]);
  }

  ngOnInit() {
    //console.log(pokemonData.pokemonData[0].id);
  }
}
