import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service'

@Component({
  selector: 'app-news-tec',
  templateUrl: './news-tec.component.html',
  styleUrls: ['./news-tec.component.css']
})
export class NewsTecComponent implements OnInit {

  public news:any ;
  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
   this.refresh("technology");

  }


  public refresh(category : string){
    this.newsService.getNews(category).subscribe(response=>{
      this.news = response.articles;
      console.log(response)
      
    })

  }
}
