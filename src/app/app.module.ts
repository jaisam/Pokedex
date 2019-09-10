import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NameComponent } from './name/name.component';
import { TypeComponent } from './type/type.component';
import { WeaknessComponent } from './weakness/weakness.component';
import { SpawnChancesComponent } from './spawn-chances/spawn-chances.component';
import { AvgSpawnsComponent } from './avg-spawns/avg-spawns.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    TypeComponent,
    WeaknessComponent,
    SpawnChancesComponent,
    AvgSpawnsComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
