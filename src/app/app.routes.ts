import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MemoramaComponent } from './pages/memorama/memorama.component';
import { FlappyComponent } from './pages/flappy-game/flappy/flappy.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'memorama', component:MemoramaComponent},
    {
        path: 'snake',
        loadChildren: () => import('./pages/snake-game/snake-game.module').then(m => m.SnakeGameModule)
    }
];
