import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {
  matchFound=false;

  constructor() {
  }

  // click () {
  //   return console.log("Hello");
  // }

  autoCompleteFunc(inputText: String, localPokemonData) {

    // console.log(inputText);
    // console.log(searchParam);
    // for (let i=0; i< localPokemonData.length ; i++ ){
    //   console.log(localPokemonData[i]);
    // }
    this.matchFound=false;
    for (let i = 0; i < localPokemonData.length; i++) {

      //Replacing this with dynamic value
      // if (searchParam === "name") {
      //   this.compareWith = localPokemonData[i].name;
      // }
      //this.compareWith = localPokemonData[i][searchParam];


      if (inputText.toLowerCase() === (localPokemonData[i].substring(0, inputText.length)).toLowerCase()) {
       // console.log(localPokemonData[i]);
        this.matchFound = true;
      }
    }


    return this.matchFound;
  }
}
