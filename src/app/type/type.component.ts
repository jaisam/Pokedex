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
  autoCompleteArray = [];

  constructor() {
    this.localPokemonDataTS = localPokemonData.data;
  }

  ngOnInit() {
  }

  autoComplete(event: Event) {
    
    this.inputValue = (<HTMLInputElement>event.target).value; // Why typecasting is required?
    this.autoCompleteArray.splice(0, this.autoCompleteArray.length);

    if (this.inputValue !== "") {
      //console.log((this.inputValue).toUpperCase());
      //console.log(this.inputValue.length);

      for (let i = 0; i < this.localPokemonDataTS.length; i++) {
        //console.log((this.localPokemonDataTS[i].name.substring(0,this.inputValue.length)).toUpperCase());

        for (let j = 0; j < this.localPokemonDataTS[i].type.length; j++) {
          //console.log(this.localPokemonDataTS[i].type[j]);

          if ((this.inputValue).toUpperCase() === (this.localPokemonDataTS[i].type[j].substring(0, this.inputValue.length)).toUpperCase()) {
            
            let obj = {
              id: "",
              name: ""
            }
        
            obj.id = this.localPokemonDataTS[i].id;
            obj.name = this.localPokemonDataTS[i].name;
            console.log(obj.name);
            this.autoCompleteArray.push(obj);
            break;
          }
        }

      }
    }

    //   console.log(this.autoCompleteArray.length);
    //   for(let i=0 ; i< this.autoCompleteArray.length ; i++){
    //     console.log(this.autoCompleteArray[i].name);
    // }

  }
}