import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Movie } from './pages/main/movie/movie';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';  // Import the Pagenotfound component
import { People } from './pages/main/people/people';

export const routes: Routes = [
    { path: '', component: Main },
    { path: 'movie/:id', component: Movie },
    { path: 'movie/director/:id', component: Movie },
    { path: 'movie/writer/:id', component: Movie },
    { path: 'movie/star/:id', component: Movie },
    { path: 'people/:id', component: People },
    { path: '**', component: Pagenotfound },
];

