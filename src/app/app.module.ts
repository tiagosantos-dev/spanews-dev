import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsTecComponent } from './news-tec/news-tec.component';
import { NewsSportsComponent } from './news-sports/news-sports.component';
import { NewsEntertainmentComponent } from './news-entertainment/news-entertainment.component';
import { NewsScienceComponent } from './news-science/news-science.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NewsComponent,
    NewsTecComponent,
    NewsSportsComponent,
    NewsEntertainmentComponent,
    NewsScienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
