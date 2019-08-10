import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameComponent } from './name/name.component';
import { TypeComponent } from './type/type.component';
import { WeaknessComponent } from './weakness/weakness.component';
import { SpawnChancesComponent } from './spawn-chances/spawn-chances.component';
import { AvgSpawnsComponent } from './avg-spawns/avg-spawns.component';


const routes: Routes = [
  {path : 'byname', component : NameComponent},
  {path : 'bytype', component : TypeComponent},
  {path : 'byweakness', component : WeaknessComponent },
  {path : 'byspawnChances', component : SpawnChancesComponent},
  {path : 'byavgSpawns', component : AvgSpawnsComponent},
  {path : '', redirectTo : 'byname' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
