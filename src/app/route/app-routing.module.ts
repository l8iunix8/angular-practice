import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { IntroduceComponent } from '../introduce/introduce.component';


const routes: Routes = [
  { path: 'allArticle', component: ContentComponent },
  { path: 'introduce', component: IntroduceComponent },
  { path: '',   redirectTo: '/allArticle', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
