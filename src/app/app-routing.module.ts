import { CharacterDetailsComponent } from './character-details/character-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';

const routes: Routes = [
  {
    path: 'character-list',
    component: CharacterListComponent
  },
  { path: 'character-details', component: CharacterDetailsComponent },
  { path: '',   redirectTo: '/character-list', pathMatch: 'full' },
/*   { path: '**', component: PageNotFoundComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
