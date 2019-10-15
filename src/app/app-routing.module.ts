import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameComponent } from './name/name.component';
import { TypeComponent } from './type/type.component';
import { WeaknessComponent } from './weakness/weakness.component';
import { SpawnChancesComponent } from './spawn-chances/spawn-chances.component';
import { AvgSpawnsComponent } from './avg-spawns/avg-spawns.component';


const routes: Routes = [
  {path : 'name', component : NameComponent},
  {path : 'type', component : TypeComponent},
  {path : 'weakness', component : WeaknessComponent },
  {path : 'spawnChances', component : SpawnChancesComponent},
  {path : 'avgSpawns', component : AvgSpawnsComponent},
  {path : '', redirectTo : 'name' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
