import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent } from './news/news.component'
import {  NewsEntertainmentComponent } from './news-entertainment/news-entertainment.component';
import { NewsScienceComponent } from './news-science/news-science.component';
import { NewsTecComponent} from './news-tec/news-tec.component'
import { NewsSportsComponent} from './news-sports/news-sports.component'
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:"", component:NewsComponent},
    {path:"entretenimento", component:NewsEntertainmentComponent},
    {path:"ciencia", component:NewsScienceComponent},
    {path:"tecnologia", component:NewsTecComponent},
    {path:"esporte", component:NewsSportsComponent},

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
