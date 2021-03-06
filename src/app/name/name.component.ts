import { Component, OnInit } from '@angular/core';
import * as localPokemonData from '../pokemonData.json';
import { AutoCompleteService } from '../Services/auto-complete.service';
import { GetPokemonsDataService } from '../Services/get-pokemons-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  localPokemonDataTs ;
  inputText : string;
  textInput: string;
  autoCompleteArray =  [];
  selectedPokemon;

  /* why this does not work? Code Piece-2
  constructor() {
    this.localPokemonDataTs = localPokemonData;
  }

  ngOnInit() {
    console.log(this.localPokemonDataTs.data);
  }
  */

constructor( private autoCompleteServiceVar : AutoCompleteService ,
              private getPokemonsDataServiceVar : GetPokemonsDataService,
                private http : HttpClient) 
{
    this.localPokemonDataTs = localPokemonData.data;
}

ngOnInit() {

}

onFormSubmit() 
{
  // console.log('Inside form submit');
  this.autoCompletion(this.inputText);
}

//   //[start] This functions Suggests Pokemon to User based on value entered in Input box without API
//   autoCompletion(event: any) 
//   {
    
//     this.textInput = event.target.value;
//     this.autoCompleteArray = [];

//     if(this.textInput != "") 
//     {
//       for (let i = 0; i < this.localPokemonDataTs.length; i++)
//       {
//         let found = false ;
//         found = this.autoCompleteServiceVar.autoCompleteFunc(this.textInput  , [this.localPokemonDataTs[i].name]);
//         if (found)
//         {
//           console.log(this.localPokemonDataTs[i].name);
//           this.autoCompleteArray.push(this.localPokemonDataTs[i]);
//         }
//       }
//     }
//   }
// //[end] This functions Suggests Pokemon to User based on value entered in Input box without API

// //[start] This functions displays data of Pokemon selected from Suggestions displayed under Input box without API
// displayClickedData(id: String) 
// {
//     this.autoCompleteArray.splice(0, this.autoCompleteArray.length);

//     for (let i = 0; i < localPokemonData.data.length; i++) 
//     {
//       if (localPokemonData.data[i].id == Number(id)) 
//       {
//         this.selectedPokemon = localPokemonData.data[i];
//         console.log(this.selectedPokemon);
//       }
//     }
// }
// //[end] This functions displays data of Pokemon selected from Suggestions displayed under Input box without API


//[start] This functions Suggests Pokemon to User based on value entered in Input box Using API
autoCompletion(input : string) 
{

    this.textInput = input;
     console.log(this.textInput);
    this.autoCompleteArray = [];

    if(this.textInput != "") 
    {
       this.autoCompleteServiceVar.autoCompleteUsingAPI( 'name'  , this.textInput )
            .subscribe(  data => {
              // console.log('before');
               if (data.msg == 'Pokemon does not exist with such name'){
                this.autoCompleteArray = [];
               }
               else {
              this.autoCompleteArray = data.pokemon;
               }
              // console.log('after');
               console.log('Inside if', this.autoCompleteArray);
            });
    }
    // console.log('outside if', this.autoCompleteArray);
}
//[end] This functions Suggests Pokemon to User based on value entered in Input box Using API


}
