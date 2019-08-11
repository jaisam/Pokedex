import { Component, OnInit } from '@angular/core';
import * as localPokemonData from '../pokemonData.json';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  localPokemonDataTs;
  textInput : string;
  /* why this does not work? Code Piece-2
  constructor() { 
    this.localPokemonDataTs = localPokemonData;
  }

  ngOnInit() {
    console.log(this.localPokemonDataTs.data);
  }
  */

  constructor() {
    this.localPokemonDataTs = localPokemonData.data;
  }

  ngOnInit() {

}

  searchByName(event : Event) {
    console.log(event);
  }

  autoCompletion(event : any) {
    
    //console.log(event.target.value);
    this.textInput = event.target.value ;
    let autoCompleteArray = [];

    for(let i= 0 ; i < localPokemonData.data.length ; i++){
      
      if ( localPokemonData.data[i].name.includes(this.textInput,0)){
      autoCompleteArray.push(localPokemonData.data[i].name);
        console.log(autoCompleteArray);
        console.log(typeof(autoCompleteArray));
      }

    }    
  }
}
