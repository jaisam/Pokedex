import { Component, OnInit } from '@angular/core';
import * as localPokemonData from '../pokemonData.json';
import { AutoCompleteService } from '../Services/auto-complete.service';
import { GetPokemonsDataService } from '../Services/get-pokemons-data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-weakness',
  templateUrl: './weakness.component.html',
  styleUrls: ['./weakness.component.css']
})
export class WeaknessComponent implements OnInit {


  localPokemonDataTS;
  inputText: string;
  inputValue: String;
  pokemonDataArray = [];
  autoCompleteArray = [];

  constructor(private autoCompleteServiceVar: AutoCompleteService,
    private getPokemonsDataServiceVar: GetPokemonsDataService,
    private http: HttpClient) {
    this.localPokemonDataTS = localPokemonData.data;
  }

  ngOnInit() { }

  onFormSubmit() {
    // console.log('Inside form submit');
    this.autoCompletion(this.inputText);
  }

  // //[start] This functions Suggests Pokemon to User based on weakness entered entered by User without using API
  // autoComplete(event: Event) 
  //   {  
  //     this.inputValue = (<HTMLInputElement>event.target).value; // Why typecasting is required?
  //     this.autoCompleteArray.splice(0,this.autoCompleteArray.length);
  //     this.pokemonDataArray.splice(0,this.pokemonDataArray.length);

  //     if(this.inputValue != "")
  //     {
  //       for (let i=0 ; i < this.localPokemonDataTS.length ; i++)
  //       {
  //         for (let j=0 ; j < this.localPokemonDataTS[i].weaknesses.length ; j++)
  //         {
  //           if (this.inputValue.toUpperCase() === (this.localPokemonDataTS[i].weaknesses[j].toUpperCase()).substring(0,this.inputValue.length) )
  //           {
  //             this.autoCompleteArray.push(this.localPokemonDataTS[i].weaknesses[j]);
  //           }
  //         }
  //       }
  //     }
  //     // Removing duplicate data from autoCompleteArray by converting it to Set and then to array again
  //     this.autoCompleteArray = [...new Set(this.autoCompleteArray)];
  //   }
  // //[end] This functions Suggests Pokemon to User based on weakness entered entered by User without using API


  // //[start] Below code finds list of Pokemon based on Type inputted by User without using API. 
  // getPokemons(inputText : String)
  //   {
  //     this.pokemonDataArray.splice(0,this.pokemonDataArray.length);
  //     if (inputText !== "") 
  //     {
  //       for (let i = 0; i < this.localPokemonDataTS.length; i++) 
  //       {
  //         for (let j = 0; j < this.localPokemonDataTS[i].weaknesses.length; j++) 
  //         {
  //           if ((inputText).toUpperCase() === (this.localPokemonDataTS[i].weaknesses[j].substring(0, inputText.length)).toUpperCase()) 
  //           {            
  //             // let obj = {
  //             //   id: "",
  //             //   name: ""
  //             // }
  //             // obj.id = this.localPokemonDataTS[i].id;
  //             // obj.name = this.localPokemonDataTS[i].name;
  //             // console.log(obj.name);
  //             this.pokemonDataArray.push(this.localPokemonDataTS[i]);
  //             break;
  //           }
  //         }
  //       }
  //     }
  //   }
  // //[end] Below code finds list of Pokemon based on Type inputted by User without using API. 


  //[start] This functions Suggests Pokemon to User based on value entered in Input box Using API
  autoCompletion(input: string) {

    this.inputValue = input;
    this.autoCompleteArray = [];

    if (this.inputValue != "") {
      this.autoCompleteServiceVar.autoCompleteUsingAPI('weakness', this.inputValue)
        .subscribe(data => {
          this.autoCompleteArray = data;
        });
    }
  }
  //[end] This functions Suggests Pokemon to User based on value entered in Input box Using API


}


