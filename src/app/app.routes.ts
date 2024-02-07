import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MemoramaComponent } from './pages/memorama/memorama.component';
import { SnakeboardComponent } from './pages/snake-game/snakeboard/snakeboard.component';
import { GameOverComponent } from './pages/game-over/game-over.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'memorama/:id', component:MemoramaComponent},
    {path:'snake/:id',component:SnakeboardComponent},
    {path:'game-over',component:GameOverComponent}
    // {
    //     path: 'snake/:id',
    //     loadChildren: () => import('./pages/snake-game/snake-game.module').then(m => m.SnakeGameModule)
    // }
];
