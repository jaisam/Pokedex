import { Component, OnInit } from '@angular/core';
import * as localPokemonData from '../pokemonData.json';
import { AutoCompleteService } from '../Services/auto-complete.service';
import { GetPokemonsDataService } from '../Services/get-pokemons-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
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

  // //[start] This functions Suggests Pokemon to User based on type entered entered by User without using API
  // autoComplete(event: Event) 
  // {
  //   this.inputValue = (<HTMLInputElement>event.target).value; // Why typecasting is required?
  //   this.autoCompleteType.splice(0,this.autoCompleteType.length);
  //   this.pokemonDataArray.splice(0,this.pokemonDataArray.length);

  //   // Auto-complete Types based on Input added by User
  //   if(this.inputValue != "")
  //   {
  //     for (let i=0 ; i < this.localPokemonDataTS.length ; i++)
  //     {
  //       for (let j=0 ; j < this.localPokemonDataTS[i].type.length ; j++)
  //       {
  //         if (this.inputValue.toUpperCase() === (this.localPokemonDataTS[i].type[j].toUpperCase()).substring(0,this.inputValue.length) )
  //         {            
  //           this.autoCompleteType.push(this.localPokemonDataTS[i].type[j]);
  //         }
  //       }
  //     }
  //   }
  //   // Removing duplicate data from autoCompleteType by converting it to Set and then to array again
  //   this.autoCompleteType = [...new Set(this.autoCompleteType)];
  // }
  // //[end] This functions Suggests Pokemon to User based on type entered entered by User without using API


  // //[start] Below code finds list of Pokemon based on Type inputted by User without using API. 
  // getPokemons(inputText : String)
  // {
  //   console.log(inputText);
  //   this.pokemonDataArray.splice(0,this.pokemonDataArray.length);
  //   if (inputText !== "") 
  //   {
  //     for (let i = 0; i < this.localPokemonDataTS.length; i++) 
  //     {
  //       for (let j = 0; j < this.localPokemonDataTS[i].type.length; j++) 
  //       {
  //         if ((inputText).toUpperCase() === (this.localPokemonDataTS[i].type[j].substring(0, inputText.length)).toUpperCase()) 
  //         {    
  //             // let obj = {
  //             //   id: "",
  //             //   name: ""
  //             // }

  //             // obj.id = this.localPokemonDataTS[i].id;
  //             // obj.name = this.localPokemonDataTS[i].name;
  //             // console.log(obj.name);
  //             this.pokemonDataArray.push(this.localPokemonDataTS[i]);
  //             break;
  //         }
  //       }
  //     }
  //   }
  // }
  // //[end] Below code finds list of Pokemon based on Type inputted by User without using API. 


  //[start] This functions Suggests Pokemon to User based on value entered in Input box Using API
  autoCompletion(input: string) {

    this.inputValue = input;
    this.autoCompleteArray = [];

    if (this.inputValue != "") {
      this.autoCompleteServiceVar.autoCompleteUsingAPI('type', this.inputValue)
        .subscribe(data => {
          if (data.msg == 'No such Type exists' ){
            this.autoCompleteArray = [];
           }
           else {
          this.autoCompleteArray = data.pokemon;
           }
        });
    }
  }
  //[end] This functions Suggests Pokemon to User based on value entered in Input box Using API



}