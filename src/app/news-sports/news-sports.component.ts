import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service'
@Component({
  selector: 'app-news-sports',
  templateUrl: './news-sports.component.html',
  styleUrls: ['./news-sports.component.css']
})
export class NewsSportsComponent implements OnInit {

  public news:any ;
  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
   this.refresh("sports");

  }


  public refresh(category : string){
    this.newsService.getNews(category).subscribe(response=>{
      this.news = response.articles;
      console.log(response)
      
    })

  }
}
