import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MemoramaComponent } from './pages/memorama/memorama.component';
import { FlappyComponent } from './pages/flappy-game/flappy/flappy.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'memorama', component:MemoramaComponent},
    {
        path: 'flappy',
        loadChildren: () => import('./pages/flappy-game/flappy-game.module').then(m => m.FlappyGameModule)
    }
];
