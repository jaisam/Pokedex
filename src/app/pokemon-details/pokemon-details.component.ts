import { Component, OnInit, Input } from '@angular/core';
import * as localPokemonDataTS from '../pokemonData.json';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() id : number;
  @Input() name : string;
  @Input() Attack : number;

  constructor() { }
  
  ngOnInit() { 
    console.log(this.name);
    console.log(this.Attack);
    //console.log(localPokemonDataTS[0].base.Defense);
    //console.log(localPokemonDataTS[0].base.Speed);
    //console.log(localPokemonDataTS[0].type[0]);
  }

}
