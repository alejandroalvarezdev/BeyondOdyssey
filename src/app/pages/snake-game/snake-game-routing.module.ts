import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnakeboardComponent } from './snakeboard/snakeboard.component';

const routes: Routes = [
  {path:'',component:SnakeboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnakeGameRoutingModule { }
