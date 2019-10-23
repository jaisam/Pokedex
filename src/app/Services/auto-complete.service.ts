import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../../Model/Pokemon';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {
  matchFound=false;

  constructor( private http : HttpClient ) {
  }

 
// [start] function to retrive data from pokemonData.json
autoCompleteFunc(inputText: String, localPokemonData) 
  {
    this.matchFound=false;
    for (let i = 0; i < localPokemonData.length; i++) 
    {
      //Replacing this with dynamic value
      // if (searchParam === "name") {
      //   this.compareWith = localPokemonData[i].name;
      // }
      //this.compareWith = localPokemonData[i][searchParam];

      if (inputText.toLowerCase() === (localPokemonData[i].substring(0, inputText.length)).toLowerCase()) 
      {
       // console.log(localPokemonData[i]);
        this.matchFound = true;
      }
    }
    return this.matchFound;
  }
// [end] function to retrive data from pokemonData.json


// [start] function to retrive data from API
autoCompleteUsingAPI( route : String, searchParam : String) : Observable<any>
  {
    let _url  = `http://localhost:3000/${route}/${searchParam}` ; 
    console.log(_url, searchParam) ;
    return this.http.get<any>(_url);
  }
// [end] function to retrive data from API


}


