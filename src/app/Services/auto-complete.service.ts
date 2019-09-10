import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {
  // autoCompleteArray = [];//not needed to be an class variable.
  compareWith: String;

  constructor() {
  }

  // click () {
  //   return console.log("Hello");
  // }

  autoCompleteFunc(inputText: String, searchParam: String, localPokemonData) {
    let autoCompleteArray=[];//define autoCompleteArray local variable.
    console.log(inputText);
    console.log(searchParam);
    // for (let i = 0; i < localPokemonData.length; i++) {
    //   console.log(localPokemonData[i].id);
    // }
    // why splicing an empty array?
    // this.autoCompleteArray.splice(0, this.autoCompleteArray.length);


    for (let i = 0; i < localPokemonData.length; i++) {

      if (searchParam === "name") {
        this.compareWith = localPokemonData[i].name;
      }
      // Instead of above you can do the following,
      // then you wont need to write if else condition for every property to be matched.
      // this.compareWith=localPokemonData[i][searchParam];

      if (inputText.toLowerCase() === (this.compareWith.substring(0, inputText.length)).toLowerCase()) {
        // console.log(localPokemonData[i].name);
        autoCompleteArray.push(localPokemonData[i]);
      }

    }


    return autoCompleteArray;
  }
}
