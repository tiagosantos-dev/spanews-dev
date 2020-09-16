import { Component, OnInit } from '@angular/core';
import { NewsService} from '../services/news.service'

@Component({
  selector: 'app-news-science',
  templateUrl: './news-science.component.html',
  styleUrls: ['./news-science.component.css']
})
export class NewsScienceComponent implements OnInit {

  public news:any ;
  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
   this.refresh("science");

  }


  public refresh(category : string){
    this.newsService.getNews(category).subscribe(response=>{
      this.news = response.articles;
      console.log(response)
      
    })

  }

}
