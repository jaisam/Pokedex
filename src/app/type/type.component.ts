import { Component, OnInit } from '@angular/core';
import * as localPokemonData from '../pokemonData.json';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  localPokemonDataTS;
  inputValue: String;
  pokemonDataArray = [];
  autoCompleteType = [];

  constructor() {
    this.localPokemonDataTS = localPokemonData.data;
  }

  ngOnInit() {
  }

  autoComplete(event: Event) {
    
    this.inputValue = (<HTMLInputElement>event.target).value; // Why typecasting is required?
    this.autoCompleteType.splice(0,this.autoCompleteType.length);
    this.pokemonDataArray.splice(0,this.pokemonDataArray.length);

    // Auto-complete Types based on Input added by User
    if(this.inputValue != ""){
      //console.log(this.inputValue);
      

      for (let i=0 ; i < this.localPokemonDataTS.length ; i++){

        for (let j=0 ; j < this.localPokemonDataTS[i].type.length ; j++){

          if (this.inputValue.toUpperCase() === (this.localPokemonDataTS[i].type[j].toUpperCase()).substring(0,this.inputValue.length) ){
            
            
            this.autoCompleteType.push(this.localPokemonDataTS[i].type[j]);
          }
        }
      }
    }

    // Removing duplicate data from autoCompleteType by converting it to Set and then to array again
    this.autoCompleteType = [...new Set(this.autoCompleteType)];


  }

//Below code finds list of Pokemon based on Type inputted by User. 
  getPokemons(inputText : String){
    console.log(inputText);
    this.pokemonDataArray.splice(0,this.pokemonDataArray.length);
 
    if (inputText !== "") {
      //console.log((inputText).toUpperCase());

      for (let i = 0; i < this.localPokemonDataTS.length; i++) {
        //console.log((this.localPokemonDataTS[i].name.substring(0,inputText.length)).toUpperCase());

        for (let j = 0; j < this.localPokemonDataTS[i].type.length; j++) {
          //console.log(this.localPokemonDataTS[i].type[j]);

          if ((inputText).toUpperCase() === (this.localPokemonDataTS[i].type[j].substring(0, inputText.length)).toUpperCase()) {
            
            // let obj = {
            //   id: "",
            //   name: ""
            // }
        
            // obj.id = this.localPokemonDataTS[i].id;
            // obj.name = this.localPokemonDataTS[i].name;
            // console.log(obj.name);
            this.pokemonDataArray.push(this.localPokemonDataTS[i]);
            break;
          }
        }

      }
    }
  }

}