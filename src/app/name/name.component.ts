import { Component, OnInit } from '@angular/core';
import * as localPokemonDataTs from '../pokemonData.json';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor() { 
  
  }

  ngOnInit() {
    //console.log(pokemonData.pokemonData[0].id);
  }
}
