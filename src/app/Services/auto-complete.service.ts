import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {
  autoCompleteArray ;
  compareWith : String;
  constructor() { }

  // click () {
  //   return console.log("Hello");
  // }

  autoCompleteFunc (inputText : String , searchParam : String , localPokemonData) {

    console.log(inputText);
    console.log(searchParam);
    for (let i=0; i< localPokemonData.length ; i++ ){
      console.log(localPokemonData[i].id);
    }

    this.autoCompleteArray.splice(0, this.autoCompleteArray.length);


      for (let i = 0; i < localPokemonData.length; i++) {

        if (searchParam === "name") {
          this.compareWith == localPokemonData[i].name;
        }

        if (inputText.toLowerCase() === (this.compareWith.substring(0,inputText.length)).toLowerCase()) {
          console.log(localPokemonData[i].name);
          this.autoCompleteArray.push(localPokemonData[i]);

        }

      }
    

    return this.autoCompleteArray ;
  }
}
