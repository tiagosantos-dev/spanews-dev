import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

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
