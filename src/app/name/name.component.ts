import { Component, OnInit } from '@angular/core';
import * as localPokemonData from '../pokemonData.json';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  localPokemonDataTs;
  textInput: string;
  autoCompleteArray = [];
  selectedPokemon;

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

  searchByName(event: Event) {
    //console.log(event);
  }

  //This functions Suggests Pokemon to User based on value enetered in Input box
  autoCompletion(event: any) {


    //console.log(event.target.value);
    this.textInput = event.target.value;
    this.autoCompleteArray.splice(0, this.autoCompleteArray.length);

    if (this.textInput != "") {
      for (let i = 0; i < localPokemonData.data.length; i++) {

        if ((this.textInput).toLowerCase() === (localPokemonData.data[i].name.substring(0,this.textInput.length)).toLowerCase()) {
        //if (localPokemonData.data[i].name.toLowerCase().includes(this.textInput.toLowerCase(), 0)) {
          //create local object and push object in autoComplete array
          let obj = {
            id: "",
            name: ""
          }

          obj.id = String(localPokemonData.data[i].id);
          obj.name = localPokemonData.data[i].name;


          this.autoCompleteArray.push(obj);
          //console.log(this.autoCompleteArray);
          //console.log(typeof(this.autoCompleteArray));
        }

      }
    }
  }
  //This functions displays data of Pokemon selected from Suggestions displayed under Input box
  displayClickedData(id: String) {

    //console.log(id);
    this.autoCompleteArray.splice(0, this.autoCompleteArray.length);

    for (let i = 0; i < localPokemonData.data.length; i++) {

      if (localPokemonData.data[i].id == Number(id)) {
        this.selectedPokemon = localPokemonData.data[i];
        console.log(this.selectedPokemon);
      }

    }

  }
}
