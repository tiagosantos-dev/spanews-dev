import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service'

@Component({
  selector: 'app-news-entertainment',
  templateUrl: './news-entertainment.component.html',
  styleUrls: ['./news-entertainment.component.css']
})
export class NewsEntertainmentComponent implements OnInit {

  public news:any ;
  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
   this.refresh("entertainment");

  }


  public refresh(category : string){
    this.newsService.getNews(category).subscribe(response=>{
      this.news = response.articles;
      console.log(response)
      
    })

  }


  
}


