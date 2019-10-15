import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../../Model/Pokemon';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {
  matchFound=false;

  constructor( private http : HttpClient ) {
  }

 

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

// [start] function to retrive data from API
  autoCompleteUsingAPI( route : String, searchParam : String) : Observable<Pokemon[]>{

    let _url  = `http://localhost:3000/${route}/${searchParam}` ; 
    console.log(_url);
    return this.http.get<Pokemon[]>(_url);
  }
}
// [end] function to retrive data from API


